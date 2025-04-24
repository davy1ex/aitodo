// import { addTask } from "@entities/task"
import { useTaskStore } from "@/05_entities/task"

export const useAddTask = () => {
    const addTask = useTaskStore((state) => state.addTask)

    return (taskName: string) => addTask(
        {
            taskId: Date.now(),
            taskName: taskName,
            isCompleted: false,
            isDeleted: false
        }
    )
}