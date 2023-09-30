import {ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef} from 'react';

import {classNames} from '@/lib/classNames';

import cls from './Button.module.scss';

export type ButtonTheme = 'contained' | 'outlined' | 'clear';
export type ButtonTextSize =
  | 'size_s'
  | 'size_m'
  | 'size_l'
  | 'size_xl'
  | 'size_xxl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  textSize?: ButtonTextSize;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      theme = 'contained',
      type = 'button',
      textSize = 'size_m',
      disabled,
      children,
      ...restProps
    } = props;

    const additional = [className, cls[theme], cls[textSize]];
    const mods = {
      [cls.disabled]: disabled,
    };

    return (
      <button
        ref={ref}
        type={type}
        className={classNames(cls.button, additional, mods)}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
