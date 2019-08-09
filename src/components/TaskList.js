import React from 'react'
import Task from './Task'
import './TaskList.css'

const TaskList = props => {
    const { handleToggleStatus, handleTaskRemove } = props
    const tasks = props.tasks.map(t => (
        <Task
            key={t.label}
            task={t}
            handleToggleStatus={handleToggleStatus}
            handleTaskRemove={handleTaskRemove}
        />
    ))
    return <ul className="task-list">{tasks}</ul>
}

export default TaskList
