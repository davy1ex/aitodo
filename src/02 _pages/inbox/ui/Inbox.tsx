import React, { useEffect, useState } from "react";
import { TaskList } from "@/03_widgets/TaskList"
import { InputTaskForm, useAddTask } from "@/04_features/inputTask";
import { getAllTasks, toggleTask, useTaskStore } from "@/05_entities/task";
import { useToggleTask } from "@/04_features/toggleTask";


export const Inbox = () => {
    const tasks = useTaskStore((state) => state.tasks)
    const addTask = useAddTask()
    const toggleTask = useToggleTask()

    return (
        <>
            <>
                <InputTaskForm onAddTask={addTask} />

                {!tasks ? "" : (
                    <>
                        <TaskList
                            listName="inbox"
                            tasks={tasks}
                            onToggle={toggleTask}
                        />
                    </>
                )}
            </>

        </>
    )
}