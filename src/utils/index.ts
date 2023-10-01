import {FiltersEnum, GenerateId, Task} from '../types';

export const generateId: GenerateId = () =>
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36);

export const getFilteredTasks = (filter: FiltersEnum, tasks: Task[]) => {
  switch (filter) {
    case FiltersEnum.IN_PROGRESS:
      return tasks.filter(task => !task.isCompleted);
    case FiltersEnum.DONE:
      return tasks.filter(task => task.isCompleted);
    default:
      return tasks;
  }
};
