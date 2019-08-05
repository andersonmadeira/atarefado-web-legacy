import React from 'react';
import TaskList from './components/TaskList';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
    state = {
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
        const tasks = this.state.tasks.filter(t => t.label !== task.label);
        this.setState({ tasks });
    };

    handleTaskAdd = nextTask => {
        if (!nextTask) return;

        const exists = this.state.tasks.find(t => t.label === nextTask);
        if (exists) return;

        const tasks = [...this.state.tasks, { label: nextTask, done: false }];
        this.setState({ tasks });
    };

    handleToggleStatus = task => {
        const tasks = this.state.tasks.map(t =>
            t.label === task.label ? { label: t.label, done: !t.done } : t
        );
        this.setState({ tasks });
    };

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <Header handleTaskAdd={this.handleTaskAdd} />
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
