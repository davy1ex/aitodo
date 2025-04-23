import { taskType } from "../model/type";
import { pushAllToLocalStorage, pushToLocalStorage, readAllFromLocalStorage } from "@shared/api/localStorage"

const TASK_KEY = "task"

export const addTask = async (task: taskType) => {
    await pushToLocalStorage(TASK_KEY, task)
}

export const getAllTasks = async () => {
    return await readAllFromLocalStorage(TASK_KEY)
}

export const toggleTask = async (taskId) => {
    let tasks = readAllFromLocalStorage(TASK_KEY)
    const updatedTasks = tasks.map((task: taskType) => {
        if (task.taskId === taskId) {
            return {
                ...task,
                isCompleted: !task.isCompleted
            };
        }
        return task;
    });
    pushAllToLocalStorage(TASK_KEY, updatedTasks)
}