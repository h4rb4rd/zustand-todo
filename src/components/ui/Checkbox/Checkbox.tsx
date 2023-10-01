import {InputHTMLAttributes, memo} from 'react';

import {classNames, Mods} from '@/lib/classNames';

import cls from './Checkbox.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled'
>;

interface CheckboxProps extends HTMLInputProps {
  className?: string;
  value?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {className, value, label, onChange, disabled, ...otherProps} = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  const checkbox = (
    <label className={classNames(cls.wrapper, [className], mods)}>
      <input
        className={cls.checkbox}
        type="checkbox"
        checked={value}
        onChange={onChangeHandler}
        disabled={disabled}
        {...otherProps}
      />
      <span className={cls.label}>{label}</span>
    </label>
  );

  return checkbox;
});
