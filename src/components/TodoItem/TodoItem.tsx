import {memo, useCallback} from 'react';

import {classNames} from '@/lib/classNames';
import {Checkbox} from '../ui/Checkbox';
import DeleteIcon from '@/assets/trash.svg?react';
import EditIcon from '@/assets/edit.svg?react';
import {Icon} from '../ui/Icon';
import {useTodosStore} from '@/store';

import cls from './TodoItem.module.scss';

interface TodoItemProps {
  className?: string;
  title: string;
  id: string;
}

export const TodoItem = memo(({className, id, title}: TodoItemProps) => {
  const {updateTask, completeTask, deleteTask} = useTodosStore(state => ({
    updateTask: state.updateTask,
    completeTask: state.completeTask,
    deleteTask: state.deleteTask,
  }));

  const handleUpdateTask = useCallback(
    (id: string, title: string) => {
      updateTask(id, title);
    },
    [updateTask]
  );

  const handleCompleteTask = useCallback(
    (id: string) => {
      completeTask(id);
    },
    [completeTask]
  );

  const handleDeleteTask = useCallback(
    (id: string) => {
      deleteTask(id);
    },
    [deleteTask]
  );

  return (
    <div className={classNames(cls.item, [className], {})}>
      <Checkbox label={title} />
      <div className={cls.icons}>
        <Icon
          Svg={EditIcon}
          clickable
          onClick={() => console.log('edit', id)}
          width={20}
          height={20}
        />
        <Icon
          Svg={DeleteIcon}
          clickable
          onClick={() => handleDeleteTask(id)}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
});
