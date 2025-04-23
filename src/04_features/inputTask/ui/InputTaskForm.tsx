import React, { useState } from "react"
import { addInputedTask } from "../api/useAddTask"
// todo add interface
export const InputTaskForm = ({ onAddTask }: { onAddTask: () => void }) => {
    const [inputValue, setInputeValue] = useState("")

    const handleKeyPressed = (key: any) => { // todo here adding by enter press
        if (key == "Enter") {
            console.log("Task will be adding Coming Soon")
            addInputedTask(inputValue)
            onAddTask()
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="input task"
                onKeyDown={(key) => handleKeyPressed(key.key)}
                value={inputValue}
                onChange={(e) => setInputeValue(e.target.value)}
            />
        </>
    )
}