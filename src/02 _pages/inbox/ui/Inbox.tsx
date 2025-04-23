import React, { useEffect, useState } from "react";
import { TaskList } from "@/03_widgets/TaskList"
import { InputTaskForm } from "@/04_features/inputTask";
import { getAllTasks, toggleTask } from "@/05_entities/task";


export const Inbox = () => {
    const [tasks, setTasks] = useState([])

    const refreshTasks = () => {
        getAllTasks().then((res) => setTasks(res));
    };

    const handleToggleTask = async (taskId: number) => {
        await toggleTask(taskId);      // изменяем в localStorage
        refreshTasks();                // обновляем UI
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <>
            <>
                <InputTaskForm onAddTask={refreshTasks} />

                {!tasks ? "" : (
                    <>
                        <TaskList
                            listName="inbox"
                            tasks={tasks}
                            onToggle={handleToggleTask}
                        />
                    </>
                )}
            </>

        </>
    )
}