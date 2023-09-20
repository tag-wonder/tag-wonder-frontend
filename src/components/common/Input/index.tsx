import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import fonts from '@/app/fonts';

import styles from './index.module.scss';

interface Props extends DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  id: string;
  labelText: string;
}

function Input({
  id, labelText, className, ...rest
}: Props) {
  return (
    <div className={styles.inputWrapper}>
      <label className={clsx(fonts.samliphopangche, styles.label)} htmlFor={id}>{labelText}</label>
      <input
        className={clsx(fonts.hSYuji, styles.input, className)}
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </div>
  );
}

export default Input;
