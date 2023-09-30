import AddIcon from '@/assets/plus.svg?react';
import {Button} from '@/components/ui/Button';
import {classNames} from '@/lib/classNames';
import {Input} from '@/components/ui/Input';
import {Icon} from '@/components/ui/Icon';

import cls from './AddTodo.module.scss';

interface AddTodoProps {
  className?: string;
}

export const AddTodo = ({className}: AddTodoProps) => {
  return (
    <div className={classNames(cls.add, [className], {})}>
      <Input placeholder="enter todo name" />
      <Button>
        <Icon Svg={AddIcon} />
      </Button>
    </div>
  );
};
