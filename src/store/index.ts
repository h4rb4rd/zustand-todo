import {create, StateCreator} from 'zustand';
import {persist, devtools} from 'zustand/middleware';

import {generateId} from '@/utils/index';
import {FiltersEnum, Task} from '@/types';

export type TodosState = {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

const todosStore: StateCreator<TodosState, [], []> = (set, get) => ({
  tasks: [],
  tasksCount: 0,
  createTask: title => {
    const {tasks} = get();
    const newTask: Task = {
      id: generateId(),
      title,
      isCompleted: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    set({tasks: [newTask].concat(tasks)});
  },
  updateTask: (id, title) => {
    const {tasks} = get();

    set({
      tasks: tasks.map(task => ({
        ...task,
        title: task.id === id ? title : task.title,
        updatedAt: Date.now(),
      })),
    });
  },
  completeTask: id => {
    const {tasks} = get();

    set({
      tasks: tasks.map(task => ({
        ...task,
        isCompleted: task.id === id ? !task.isCompleted : task.isCompleted,
        updatedAt: Date.now(),
      })),
    });
  },
  deleteTask: id => {
    const {tasks} = get();

    set({
      tasks: tasks.filter(task => task.id !== id),
    });
  },
});

export const useTodosStore = create<TodosState>()(
  devtools(persist(todosStore, {name: 'todos'}))
);

type FilterState = {
  filter: FiltersEnum;
  setFilter: (filter: FiltersEnum) => void;
};

const filterStore: StateCreator<FilterState, [], []> = set => ({
  filter: FiltersEnum.ALL,

  setFilter: filter => {
    set({
      filter,
    });
  },
});

export const useFilterStore = create<FilterState>()(
  devtools(persist(filterStore, {name: 'filter'}))
);
