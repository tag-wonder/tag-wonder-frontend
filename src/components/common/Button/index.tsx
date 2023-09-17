/* eslint-disable react/jsx-props-no-spreading */
import {
  ButtonHTMLAttributes, HTMLProps, memo, PropsWithChildren, ReactElement, ReactNode,
} from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import fonts from '@/app/fonts';

import styles from './index.module.scss';

type ButtonType = 'primary' | 'secondary';

interface Props extends Omit<HTMLProps<HTMLButtonElement | HTMLAnchorElement>, 'size'> {
  buttonType?: ButtonType;
  width?: `${number}px`;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  prefixIcon?: ReactNode;
}

function Button({
  href,
  type = 'button',
  disabled,
  width,
  buttonType = 'primary',
  prefixIcon,
  className,
  children,
  ...rest
}: PropsWithChildren<Props>): ReactElement {
  const htmlProps = rest as any;

  const buttonClassName = clsx(fonts.samliphopangche, styles.buttonWrapper, {
    [styles[buttonType]]: buttonType,
  }, className);

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(buttonClassName, disabled && styles.disabled)}
        aria-disabled={disabled}
        style={{
          width,
        }}
        {...htmlProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={buttonClassName}
      disabled={disabled}
      style={{
        width,
      }}
      {...htmlProps}
    >
      {prefixIcon && (
        <div className={styles.prefixIconWrapper}>{prefixIcon}</div>
      )}
      {children}
    </button>
  );
}

export default memo(Button);
