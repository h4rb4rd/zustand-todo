export type GenerateId = () => string;

export type Task = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  isCompleted: boolean;
};

export enum FiltersEnum {
  ALL = 'all',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}
