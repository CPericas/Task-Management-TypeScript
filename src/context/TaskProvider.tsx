import React, { useState } from "react";
import { Task, TaskContext } from "./TaskContext";

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Sample Task 1", description: "Feed the dogs", completed: false, startDate: "test", urgent: false },
        { id: 2, title: "Sample Task 2", description: "Make dinner", completed: true, startDate: "test", urgent: true },
    ]);

    const addTask = (title: string, description: string, startDate: string, endDate?: string | null, urgent: boolean = false) => {
        const newTask: Task = { 
            id: Date.now(), 
            title, 
            description, 
            completed: false,
            startDate,
            endDate: endDate || null,
            urgent 
        };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id: number, title: string, description: string) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, title, description } : task));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleTaskCompletion }}>
            {children}
        </TaskContext.Provider>
    );
};
export default TaskProvider;
