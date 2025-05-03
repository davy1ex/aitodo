import React from 'react'
import { ColumnTasks } from '../../../widgets/columnTasks'
import "./HomePage.css"

type Props = {}

export const HomePage = (props: Props) => {
    return (
        <div className="pageWrapper">
            <div>HomePage</div>
            <div className="tasksColumn">
                <ColumnTasks listName="Habbits" />
                <ColumnTasks listName="Backlog" />
                <ColumnTasks listName="Projects" />

            </div>
        </div>
    )
}