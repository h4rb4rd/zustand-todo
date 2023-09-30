import {classNames} from '@/lib/classNames';
import {Checkbox} from '../ui/Checkbox';
import {Icon} from '../ui/Icon';

import EditIcon from '@/assets/edit.svg?react';
import DeleteIcon from '@/assets/trash.svg?react';

import cls from './TodoItem.module.scss';

interface TodoItemProps {
  className?: string;
}

export const TodoItem = ({className}: TodoItemProps) => {
  return (
    <div className={classNames(cls.item, [className], {})}>
      <Checkbox label="todo name" />
      <div className={cls.icons}>
        <Icon
          Svg={EditIcon}
          clickable
          onClick={() => console.log('edit')}
          width={20}
          height={20}
        />
        <Icon
          Svg={DeleteIcon}
          clickable
          onClick={() => console.log('delete')}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
