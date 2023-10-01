import {AddTask} from '@/components/AddTask';
import {Divider} from '@/components/ui/Divider';
import {Filters} from '@/components/Filters';
import {Placeholder} from '@/components/ui/Placeholder';
import {TaskList} from '@/components/TaskList';
import {useTodosStore} from '@/store';

import cls from './App.module.scss';

export const App = () => {
  const tasksCount = useTodosStore(state => state.tasks.length);

  return (
    <div className={cls.app}>
      <div className={cls.container}>
        <h1 className={cls.title}>To Do App</h1>
        <AddTask />
        <Divider />
        <Filters />
        {tasksCount ? <TaskList /> : <Placeholder text="Task list is empty" />}
      </div>
    </div>
  );
};
