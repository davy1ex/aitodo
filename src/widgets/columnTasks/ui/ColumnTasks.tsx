import React, { useState } from 'react'
import { Task, TaskComponent } from '../../../entities/task'
import "./style.css"

type Props = {
    listName: string
}

export function ColumnTasks(props: Props) {
    const tasksMock = [
        {
            taskId: 0,
            taskName: "Помыть кота",
            isCompleted: false
        },
        {
            taskId: 1,
            taskName: "купиьб кота",
            isCompleted: false
        },
        {
            taskId: 2,
            taskName: "продать кота",
            isCompleted: true
        }
    ]
    const [tasks, setTasks] = useState<Task[]>(tasksMock)

    const onTaskEdit = (taskId: number, text: string) => {
        console.log("start edit new task. array before", tasks)
        setTasks(
            tasks.map((task) => (
                (task.taskId == taskId)
                    ? { ...task, taskName: text }
                    : { ...task }
            ))
        )
        console.log("NOW", tasks)
    }
    return (
        <div className='columnTasksContainer'>
            <div className="columnTasksHeader">{props.listName}</div>

            <div className="tasksContainer">
                <div className="columnTasksContent">

                    <input type="text" className="tasksInput" placeholder={`input new ${props.listName.toLowerCase()}`} /> {/* todo make toggle for task or habbit input */}
                    <div className="columnTaskWrapper">
                        {tasks.map((task) => (
                            <TaskComponent task={task} onTaskEdit={onTaskEdit} />
                        ))}
                    </div>
                </div>

                <div className="columnText">
                    This is your {props.listName.toLowerCase()} list
                </div>

            </div>
        </div>
    )
}