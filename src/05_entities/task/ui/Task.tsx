import React from "react";
import { taskType } from "../model/type";

interface Props {
    task: taskType,
    onChange: (taskId: number) => void
}

export const Task = (props: Props) => {
    return (
        <li>
            <input
                id={`${props.task.taskId}`}
                type="checkbox"
                name=""
                checked={props.task.isCompleted}
                onChange={() => props.onChange(props.task.taskId)}
            /> {props.task.taskName}
        </li>
    )
}