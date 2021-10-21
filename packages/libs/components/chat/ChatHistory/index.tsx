import React, {
  FC, useCallback, useEffect, useMemo, useState, 
} from 'react';
import {
  AutoSizer, CellMeasurer, CellMeasurerCache, List, 
} from 'react-virtualized';
import { debounce } from 'throttle-debounce';
import { RenderedRows } from 'react-virtualized/dist/es/List';
import { createPortal } from 'react-dom';
import { ChatMessage } from '@project/libs/components/chat/ChatMessage';
import styles from './styles.module.scss';
import { ChatNewMessagesCount } from '../ChatNewMessagesCount';

interface IProps {
  messages: string[];
  debug?: boolean;
}

// change it according to your design's typical message height
const defaultRowSize = 110;
// if scrolled less than {scrollOnMessages}, then auto-scroll to end on new messages
const scrollOnMessages = 1;

const ChatHistory: FC<IProps> = ({ messages, debug }) => {
  const [ref, setRef] = useState<List | null>(null);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [lastSeenMessage, setLastSeenMessage] = useState(0);
  const newMessagesCount = messages.length - lastSeenMessage - 1;

  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        minHeight: defaultRowSize,
      }),
    [],
  );

  const rowRenderer = useCallback(
    ({
      index, parent, key, style, 
    }) => (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}
      >
        {({ registerChild, measure }) => (
          <div
            ref={(el) => registerChild!(el as Element)}
            style={style}
            className={styles.row}
          >
            <ChatMessage measure={measure}>{messages[index]}</ChatMessage>
          </div>
        )}
      </CellMeasurer>
    ),
    [messages, cache],
  );

  const onRowsRendered = useCallback(
    debounce<(info: RenderedRows) => void>(50, false, ({ stopIndex }) =>
      setCurrentMessage(stopIndex)),
    [setCurrentMessage],
  );

  const scrollToBottom = useCallback(() => {
    if (!ref) {
      return;
    }

    ref.scrollToRow(messages.length);
  }, [ref, messages.length]);

  // auto-scrolls to bottom
  useEffect(() => {
    if (currentMessage + scrollOnMessages < lastSeenMessage) {
      return;
    }

    scrollToBottom();
  }, [messages.length, ref]);

  // sets last seen message
  useEffect(() => {
    if (currentMessage > lastSeenMessage) {
      setLastSeenMessage(currentMessage);
    }
  }, [currentMessage, lastSeenMessage]);

  return (
    <>
      {!!debug && createPortal(
        <span className={styles.hud}>
          <div>
            Message at the bottom:
            {currentMessage}
          </div>

          <div>
            Last seen message:
            {lastSeenMessage}
          </div>
          <div>
            New messages:
            {newMessagesCount}
          </div>
        </span>,
        document.body,
      )}

      <AutoSizer>
        {({ width, height }) => (
          <List
            scrollToAlignment="end"
            estimatedRowSize={85}
            ref={setRef}
            height={height}
            rowHeight={cache.rowHeight}
            rowCount={messages.length}
            width={width}
            rowRenderer={rowRenderer}
            className={styles.list}
            overscanRowCount={0}
            onRowsRendered={onRowsRendered}
          />
        )}
      </AutoSizer>

      <ChatNewMessagesCount count={newMessagesCount} onClick={scrollToBottom} />
    </>
  );
};
export { ChatHistory };
