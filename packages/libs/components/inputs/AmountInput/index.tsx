import React, { ChangeEventHandler, FC } from 'react';
import { isNil } from 'ramda';
import { TextInput, TextInputProps } from '../TextInput';

interface IProps extends TextInputProps {
  amount?: number;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
}

const AmountInput: FC<IProps> = ({
  amount,
  onChangeAmount,
  ...props
}) => (
  <TextInput
    type="number"
    onChange={onChangeAmount}
    min={0}
    step="any"
    value={isNil(amount) ? '' : amount}
    {...props}
  />
);

export { AmountInput };
