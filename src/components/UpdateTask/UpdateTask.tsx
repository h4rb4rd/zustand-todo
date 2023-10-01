import {memo, useCallback, useState} from 'react';

import AcceptIcon from '@/assets/check.svg?react';
import {Button} from '@/components/ui/Button';
import {classNames} from '@/lib/classNames';
import {Input} from '@/components/ui/Input';
import {Icon} from '@/components/ui/Icon';
import {useTodosStore} from '@/store';

import cls from './UpdateTask.module.scss';

interface UpdateTaskProps {
  className?: string;
  id: string;
  title: string;
  handleEditMode: () => void;
}

export const UpdateTask = memo(
  ({className, id, title, handleEditMode}: UpdateTaskProps) => {
    const [taskTitle, setTaskTitle] = useState(title);
    const updateTask = useTodosStore(state => state.updateTask);

    const handleTasksTitle = useCallback((title: string) => {
      setTaskTitle(title);
    }, []);

    const handleUpdateTask = useCallback(() => {
      updateTask(id, taskTitle);
      handleEditMode();
    }, [taskTitle, updateTask, id, handleEditMode]);

    return (
      <div className={classNames(cls.update, [className], {})}>
        <Input
          className={cls.input}
          placeholder="enter todo title"
          value={taskTitle}
          onChange={handleTasksTitle}
          autofocus
        />
        <Button disabled={!taskTitle} onClick={handleUpdateTask}>
          <Icon Svg={AcceptIcon} />
        </Button>
        <Button onClick={handleEditMode}>&#10006;</Button>
      </div>
    );
  }
);
