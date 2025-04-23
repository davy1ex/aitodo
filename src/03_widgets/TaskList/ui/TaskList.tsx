import React from "react";
import { taskType } from "@/05_entities/task/model/type";
import { Task, toggleTask } from "@entities/task";

type Props = {
    listName: string,
    tasks: taskType[]
    onToggle: (taskId: number) => void
}

export const TaskList = (props: Props) => {
    return (
        <>
            <h1>{props.listName}</h1>
            <ul>
                {props.tasks.map((task) => (
                    <Task
                        task={task}
                        onChange={() => props.onToggle(task.taskId)}
                    />
                ))}
            </ul>
        </>
    )
}