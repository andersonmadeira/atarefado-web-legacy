import React from 'react';
import './Task.css';

const Task = props => {
    const { task, handleToggleStatus, handleTaskRemove } = props;
    const classes = task.done ? 'checked' : '';

    return (
        <li className={classes}>
            <span className="label" onClick={() => handleToggleStatus(task)}>
                {task.label}
            </span>
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
