import {memo} from 'react';

import {classNames} from '@/lib/classNames';
import {Task} from '@/types';
import {TaskItem} from '@/components/TaskItem';

import cls from './TaskList.module.scss';

interface TaskListProps {
  className?: string;
  tasks: Task[];
}

export const TaskList = memo(({className, tasks}: TaskListProps) => {
  return (
    <div className={classNames(cls.todos, [className], {})}>
      {tasks?.map(({id, title, isCompleted}) => (
        <TaskItem key={id} id={id} title={title} isCompleted={isCompleted} />
      ))}
    </div>
  );
});
