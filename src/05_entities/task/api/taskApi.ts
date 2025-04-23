import { taskType } from "../model/type"


export const addTask = (task: taskType, onAdd: onAdd) => {
    // todo add try catch exception
    onAdd(task)
}