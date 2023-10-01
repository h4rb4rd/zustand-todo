import {memo, useCallback, useState} from 'react';
import AddIcon from '@/assets/plus.svg?react';
import {Button} from '@/components/ui/Button';
import {classNames} from '@/lib/classNames';
import {Input} from '@/components/ui/Input';
import {Icon} from '@/components/ui/Icon';
import {useTodosStore} from '@/store';

import cls from './AddTask.module.scss';

interface AddTaskProps {
  className?: string;
}

export const AddTask = memo(({className}: AddTaskProps) => {
  const [taskTitle, setTaskTitle] = useState('');
  const createTask = useTodosStore(state => state.createTask);

  const handleTasksTitle = useCallback((title: string) => {
    setTaskTitle(title);
  }, []);

  const handleCreateTask = useCallback(() => {
    createTask(taskTitle);
    setTaskTitle('');
  }, [taskTitle, createTask]);

  return (
    <div className={classNames(cls.add, [className], {})}>
      <Input
        placeholder="enter todo title"
        value={taskTitle}
        onChange={handleTasksTitle}
      />
      <Button disabled={!taskTitle} onClick={handleCreateTask}>
        <Icon Svg={AddIcon} />
      </Button>
    </div>
  );
});
