import { create, StateCreator } from "zustand"
import { taskType } from "./type"

export const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, task]
        })),
    toggleTask: (taskId) => (
        set((state) => ({
            tasks: state.tasks.map((task) => (
                task.taskId == taskId
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            ))
        }))
    )
    // toggleTask,
}))