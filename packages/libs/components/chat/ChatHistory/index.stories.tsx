import { storiesOf } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { button } from '@storybook/addon-knobs';
import { ChatHistory } from './index';

const generateMessage = (
  index: number,
) => `#${index} This is a chat history with auto-scroll to bottom, virtualization 
and new messages counter. Based on react-virtualized, it supports huge amount of messages. 
`;

const mockedMessages = [...new Array(1000)].map((_, i) => generateMessage(i));

storiesOf('Chat', module).add('ChatHistory', () => {
  const [messages, setMessages] = useState(mockedMessages);

  const pushMessage = useCallback(
    () => setMessages([...messages, generateMessage(messages.length)]),
    [messages, setMessages],
  );

  button('Push message', pushMessage);

  return (
    <div style={{
      width: '100%',
      maxWidth: 400,
      maxHeight: '60vh',
      height: '100%',
    }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          maxHeight: '60vh',
          height: '100%',
          backgroundColor: 'var(--color-secondary)',
          borderRadius: 8,
        }}
      >
        <ChatHistory messages={messages} debug />
      </div>

      <button
        type="button"
        onClick={pushMessage}
        style={{
          backgroundColor: 'var(--color-primary)',
          padding: 10,
          marginTop: 10,
          marginBottom: 10,
          width: '100%',
          color: 'white',
          borderRadius: 4,
        }}
      >
        Add messages
      </button>

      <p>See, how scroll reacts to newly added messages</p>
      <p>Scroll to top and add messages to see new messages counter</p>
    </div>
  );
});
