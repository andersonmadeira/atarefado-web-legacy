import React from 'react';
import './Task.css';

const Task = props => {
    const { task, handleToggleStatus, handleTaskRemove } = props;
    const classes = task.done ? 'checked' : '';
    return (
        <li className={classes} onClick={() => handleToggleStatus(task)}>
            {task.label}
            <span
                className="close"
                onClick={event => {
                    event.stopPropagation();
                    handleTaskRemove(task);
                }}
            >
                ×
            </span>
        </li>
    );
};

export default Task;
