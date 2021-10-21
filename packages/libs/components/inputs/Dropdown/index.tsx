import React, { FC, ReactNode } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';
import { Placement } from '@popperjs/core';
import { useFocusEvent } from '../../../hooks/useFocusEvent';
import styles from './styles.module.scss';
import { usePopperModifiers } from '../../../hooks/ui/usePopperModifiers';
import { PopperUpdater } from '../../common/PopperUpdater';

interface IProps {
  label: ReactNode;
  offset?: number;
  placement?: Placement;
  deps?: any[];
  delay?: number;
  buttonClassName?: string;
  popupClassName?: string;
}

const Dropdown: FC<IProps> = ({
  label, placement, offset = 0, children,
  deps, delay,
  buttonClassName, popupClassName,
}) => {
  const { onFocus, focused, onBlur } = useFocusEvent();
  const modifiers = usePopperModifiers(0, offset);

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <button ref={ref} onFocus={onFocus} onBlur={onBlur} type="button" className={classNames(styles.button, buttonClassName)}>
            {label}
          </button>
        )}
      </Reference>

      <Popper modifiers={modifiers} placement={placement}>
        {({ ref, style, update }) => (
          <PopperUpdater update={update} deps={deps} delay={delay}>
            <div
              ref={ref}
              style={style}
              className={classNames(styles.popper, popupClassName, { [styles.hidden]: !focused })}
            >
              {children}
            </div>
          </PopperUpdater>
        )}
      </Popper>
    </Manager>
  );
};

export { Dropdown };
