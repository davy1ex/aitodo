// entities/task/ui/TaskModal.tsx
import React, { useEffect } from 'react'
import './style.css'
import { Task } from '../model/type'

type Props = {
    task: Task
    onClose: () => void
}

export const TaskModal = ({ task, onClose }: Props) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h3>Детали задачи</h3>
                <p>{task.taskName}</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}
