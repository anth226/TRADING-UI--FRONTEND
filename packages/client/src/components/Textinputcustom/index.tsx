/* eslint-disable */
import React, { ChangeEventHandler, FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';

type Type = 'normal' | 'small';

interface Props {
    type?: Type
    className?: string
    label?: string
    value?: string
    symbol?: string
    onChange?: any
    Icon?: any
    IconClassName?: string
    inputClassName?: string
    labelClassName?: string
}

// @ts-ignore
// @ts-ignore
const TextInputCustom: FC<Props> = ({
                                         type = 'normal',
                                         label,
                                         value,
                                         symbol,
                                         onChange,
                                         Icon,
                                         className,
                                         IconClassName,
                                     }) => (
    <div className={ styles.wrap}>
        <div className={styles.content}>
            <div
                className={styles.row}
            >
                <div className={styles.col}>
                    <div
                        className={styles.input_wrap}
                    >
                        <p className={styles.label}>{label}</p>

                    </div>
                    <div>
                        <input
                            onChange={onChange}
                            className={styles.input}
                            type="text"
                            value={value}
                        />
                    </div>
                </div>
                <div className={styles.iconsi}>
                    <FontIcon className={styles.ico } size={15} name={Icon} />
                    <span className={styles.ico}>{symbol}</span>
                </div>

            </div>

        </div>

    </div>
);

export { TextInputCustom };
