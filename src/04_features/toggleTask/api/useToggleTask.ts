import { useTaskStore } from "@/05_entities/task";

export const useToggleTask = () => {
    const toggleTask = useTaskStore((state) => state.toggleTask)

    return (taskId: number) =>
        toggleTask(taskId)

}