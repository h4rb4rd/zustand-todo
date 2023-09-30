import {create} from 'zustand';

import {generateId} from '@/utils/index';

type Task = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  isCompleted: boolean;
};

type TodosState = {
  tasks: Task[];
};

type TodosActions = {
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const useTodosStore = create<TodosState & TodosActions>((set, get) => ({
  tasks: [],
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
}));
