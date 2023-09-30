import {AddTodo} from '@/components/AddTodo';
import {Divider} from '@/components/ui/Divider';
import {TodoItem} from '@/components/TodoItem';

import cls from './App.module.scss';

export const App = () => {
  return (
    <div className={cls.app}>
      <div className={cls.container}>
        <h1 className={cls.title}>To Do App</h1>
        <AddTodo />
        <Divider />
        <div className={cls.todos}>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};
