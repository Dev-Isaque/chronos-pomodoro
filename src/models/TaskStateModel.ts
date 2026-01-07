import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
    tasks : TaskModel[]; //Historico, MainForm
    secondsRemaining: number; // Countdown, Histórico, MainForm, Button
    formatedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
    
}