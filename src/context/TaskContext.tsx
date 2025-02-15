import { createContext, useContext } from "react";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    startDate: string;
    endDate?: string | null;
    urgent: boolean;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (title: string, description: string, startDate: string, endDate?: string | null, urgent?: boolean) => void;
    editTask: (id: number, title: string, description: string, startDate: string, endDate?: string | null, urgent?: boolean) => void;
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext not used in TaskProvider");
    }
    return context;
};
