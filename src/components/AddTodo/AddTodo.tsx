import {memo, useCallback, useState} from 'react';
import AddIcon from '@/assets/plus.svg?react';
import {Button} from '@/components/ui/Button';
import {classNames} from '@/lib/classNames';
import {Input} from '@/components/ui/Input';
import {Icon} from '@/components/ui/Icon';
import {useTodosStore} from '@/store';

import cls from './AddTodo.module.scss';

interface AddTodoProps {
  className?: string;
}

export const AddTodo = memo(({className}: AddTodoProps) => {
  const [taskTitle, setTaskTitle] = useState('');
  const createTask = useTodosStore(state => state.createTask);

  const handleTasksTitle = useCallback((title: string) => {
    setTaskTitle(title);
  }, []);

  const handleCreateTask = useCallback(() => {
    createTask(taskTitle);
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
