export type GenerateId = () => string;

export type Task = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  isCompleted: boolean;
};
