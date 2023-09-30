import {memo, useRef, useState, useEffect, InputHTMLAttributes} from 'react';

import {classNames, Mods} from '@/lib/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: 'text' | 'number';
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    autofocus,
    disabled,
    placeholder,
    type = 'text',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.focused]: isFocused,
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.wrapper, [className], mods)}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});
