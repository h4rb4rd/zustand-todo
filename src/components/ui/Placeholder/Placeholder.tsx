import {classNames} from '@/lib/classNames';

import cls from './Placeholder.module.scss';

interface PlaceholderProps {
  className?: string;
  text?: string;
}

export const Placeholder = ({className, text}: PlaceholderProps) => {
  return (
    <div className={classNames(cls.placeholder, [className], {})}>{text}</div>
  );
};
