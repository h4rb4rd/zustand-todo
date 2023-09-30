import {AddTodo} from '@/components/AddTodo';
import {Divider} from '@/components/ui/Divider';
import {TodoItem} from '@/components/TodoItem';
import {useTodosStore} from '@/store';

import cls from './App.module.scss';

export const App = () => {
  const tasks = useTodosStore(state => state.tasks);

  console.log(tasks);

  return (
    <div className={cls.app}>
      <div className={cls.container}>
        <h1 className={cls.title}>To Do App</h1>
        <AddTodo />
        <Divider />
        <div className={cls.todos}>
          {tasks?.map(({id, title}) => (
            <TodoItem key={id} id={id} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
