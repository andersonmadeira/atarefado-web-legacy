import React from 'react';
import TaskList from './components/TaskList';
import './App.css';

class App extends React.Component {
    state = {
        nextTask: '',
        tasks: [
            {
                label: 'Star Wars: The Last Jedi',
                done: true,
            },
            {
                label: 'Toy Story 4',
                done: false,
            },
            {
                label: 'Spider-Man: Far From Home',
                done: false,
            },
            {
                label: 'The Lion King',
                done: false,
            },
        ],
    };

    handleTaskRemove = task => {
        console.log('handleTaskRemove: ', task);
        console.log('test: ', task);
        const tasks = this.state.tasks.filter(t => t.label !== task.label);
        this.setState({ tasks });
    };

    handleTaskAdd = () => {
        console.log('handleTaskAdd');
        const tasks = [
            ...this.state.tasks,
            { label: this.state.nextTask, done: false },
        ];
        this.setState({ tasks });
    };

    handleToggleStatus = task => {
        console.log('handleToggleStatus: ', task);
        const tasks = this.state.tasks.map(t =>
            t.label === task.label ? { label: t.label, done: !t.done } : t
        );
        this.setState({ tasks });
    };

    render() {
        const { nextTask, tasks } = this.state;
        return (
            <div>
                <div className="header">
                    <h2 className="app-title">Task List</h2>
                    <input
                        className="entry-field"
                        type="text"
                        spellCheck="false"
                        value={nextTask}
                        onChange={e =>
                            this.setState({ nextTask: e.target.value })
                        }
                        placeholder="Enter your next task..."
                    />
                    <span onClick={this.handleTaskAdd} className="add-button">
                        Add
                    </span>
                </div>
                <TaskList
                    tasks={tasks}
                    handleToggleStatus={this.handleToggleStatus}
                    handleTaskRemove={this.handleTaskRemove}
                />
            </div>
        );
    }
}

export default App;
