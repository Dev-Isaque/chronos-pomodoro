import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  title: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chegar ao final
  interruptedDate: number | null; // quando o usuário interromper a tarefa
  type: keyof TaskStateModel['config'];
};
