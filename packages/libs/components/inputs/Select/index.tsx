import React, { FC } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import { useFocusEvent } from '@project/libs/hooks/useFocusEvent';
import classNames from 'classnames';
import { usePopperModifiers } from '@project/libs/hooks/ui/usePopperModifiers';
import { TextInputWrap } from '@project/libs/components/inputs/TextInputWrap';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

export interface Option<T extends string = string> {
  value: T;
  label: string;
}

interface Props {
  variants: Option[];
  value?: Option;
  optionRenderer?: (current: Option<any>) => JSX.Element;
  valueRenderer?: (current: Option<any>) => JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  onChange: (val: Option<any>) => void;
  className?: string
}

const defaultValueRenderer = (current: Option) => (
  <div className={styles.value}>{current.label}</div>
);

const defaultOptionRenderer = (current: Option) => (
  <div className={styles.option}>{current.label}</div>
);

const Select: FC<Props> = ({
  value,
  variants,
  disabled,
  optionRenderer = defaultOptionRenderer,
  placeholder,
  valueRenderer = defaultValueRenderer,
  onChange,
  className,
}) => {
  const { onFocus, onBlur, focused } = useFocusEvent();
  const modifiers = usePopperModifiers(0, 10, true);

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <button
            className={styles.button}
            type="button"
            ref={ref}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <TextInputWrap className={className}>
              {value ? (
                <div className={styles.value}>{valueRenderer(value)}</div>
              ) : (
                <div className={styles.empty}>{placeholder}</div>
              )}
              <FontIcon
                name={FontIconName.ChevronDown}
                size={16}
                className={styles.chevron}
              />
            </TextInputWrap>
          </button>
        )}
      </Reference>

      <Popper modifiers={modifiers}>
        {({ ref, style }) => (
          <div
            className={classNames(styles.floater, {
              [styles.hidden]: !focused,
            }, className)}
            ref={ref}
            style={style}
          >
            <div className={styles.list}>
              {variants.map((variant) => (
                <button
                  className={styles.variant}
                  onClick={() => onChange(variant)}
                  type="button"
                  key={variant.value}
                >
                  {optionRenderer(variant)}
                </button>
              ))}
            </div>
          </div>
        )}
      </Popper>
    </Manager>
  );
};

export { Select };
