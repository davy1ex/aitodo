import { addTask } from "@entities/task"

export const addInputedTask = async (taskName) => {
    await addTask(
        {
            taskId: Date.now(),
            taskName: taskName,
            isCompleted: false,
            isDeleted: false
        }
    )
}