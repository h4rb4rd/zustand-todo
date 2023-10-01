import {memo, useCallback, useState} from 'react';

import {classNames} from '@/lib/classNames';
import {Checkbox} from '../ui/Checkbox';
import DeleteIcon from '@/assets/trash.svg?react';
import EditIcon from '@/assets/edit.svg?react';
import {Icon} from '../ui/Icon';
import {useTodosStore} from '@/store';
import {UpdateTask} from '@/components/UpdateTask';

import cls from './TaskItem.module.scss';

interface TaskItemProps {
  className?: string;
  title: string;
  id: string;
  isCompleted: boolean;
}

export const TaskItem = memo(
  ({className, id, title, isCompleted}: TaskItemProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const {completeTask, deleteTask} = useTodosStore(state => ({
      completeTask: state.completeTask,
      deleteTask: state.deleteTask,
    }));

    const handleEditMode = useCallback(() => {
      setIsEdit(prev => !prev);
    }, []);

    const handleCompleteTask = useCallback(() => {
      completeTask(id);
    }, [completeTask, id]);

    const handleDeleteTask = useCallback(() => {
      deleteTask(id);
    }, [deleteTask, id]);

    if (isEdit) {
      return (
        <UpdateTask
          className={classNames('', [className], {})}
          id={id}
          title={title}
          handleEditMode={handleEditMode}
        />
      );
    }

    return (
      <div className={classNames(cls.item, [className], {})}>
        <Checkbox
          className={classNames(cls.checkbox, [], {
            [cls.completed]: isCompleted,
          })}
          label={title}
          onChange={handleCompleteTask}
        />
        <div className={cls.icons}>
          <Icon
            Svg={EditIcon}
            clickable
            onClick={handleEditMode}
            width={20}
            height={20}
          />
          <Icon
            Svg={DeleteIcon}
            clickable
            onClick={handleDeleteTask}
            width={20}
            height={20}
          />
        </div>
      </div>
    );
  }
);
