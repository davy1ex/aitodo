import React, { useState, useRef, useEffect } from 'react'
import "./style.css"
import { Task } from '../model/type'
import { TaskModal } from './TaskModal'

type Props = {
    task: Task,
    onTaskEdit: (taskId: number, text: string) => void
}

export const TaskComponent = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [taskEditing, setTaskEditing] = useState(false)
    const [task, setTask] = useState(props.task.taskName)
    const inputRef = useRef<HTMLInputElement>(null)

    const onTaskEdit = () => {
        setTaskEditing(true)
    }

    const keyHandler = (key: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(key)
        if (key.key === "Enter") {
            setTaskEditing(false)
            props.onTaskEdit(props.task.taskId, task)
        }
        if (key.key === "Escape") {
            setTask(props.task.taskName)
            setTaskEditing(false)
        }
    }

    const onTaskWindowOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains("taskName")) return;
        setIsModalOpen(true)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setTaskEditing(false)
            }
        }

        if (taskEditing) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [taskEditing])

    return (
        <>
            <div className="taskWrapper" onClick={onTaskWindowOpen}>
                <div className="taskCheckox">
                    ➕ {/* // todo: make toggle for habbit or task  */}
                </div>

                {taskEditing ? (
                    <input
                        className='inputTaskName'
                        ref={inputRef}
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={keyHandler}
                        autoFocus
                    />
                ) : (
                    <div className="taskName" onClick={onTaskEdit}>
                        {props.task.taskName}
                    </div>
                )}

                <div className="taskUncheckox">
                    ➖ {/* // todo: make toggle for habbit or task  */}
                </div>
            </div>

            {isModalOpen && (
                < TaskModal task={props.task} onClose={() => setIsModalOpen(false)} />
            )}
        </>


    )
}
