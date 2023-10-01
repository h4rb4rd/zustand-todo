import {memo} from 'react';

import {classNames} from '@/lib/classNames';
import {getFilteredTasks} from '@/utils';
import {TaskItem} from '@/components/TaskItem';
import {useFilterStore, useTodosStore} from '@/store';

import cls from './TaskList.module.scss';

interface TaskListProps {
  className?: string;
}

export const TaskList = memo(({className}: TaskListProps) => {
  const filter = useFilterStore(state => state.filter);
  const tasks = useTodosStore(state => getFilteredTasks(filter, state.tasks));

  return (
    <div className={classNames(cls.todos, [className], {})}>
      {tasks?.map(({id, title, isCompleted}) => (
        <TaskItem key={id} id={id} title={title} isCompleted={isCompleted} />
      ))}
    </div>
  );
});
