import { createContext, useContext, useState, ReactNode } from "react";

type Task = {
    name: string;
    date: Date;
    message: string;
}

interface TasksContextValue {
    tasks: Task[];
    addTask: (task: Task) => void;
}

const TasksContext = createContext<TasksContextValue | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) { 
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks(prev => [...prev, task]);
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask }}>
            {children}
        </TasksContext.Provider>
    );
};

export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within TasksProvider");
  }
  return context;
}