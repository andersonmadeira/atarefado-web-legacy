import React from 'react'
import TaskList from './components/TaskList'
import Header from './components/Header'
import './App.css'
import { getTasks, removeTask, addTask, toggleTask } from './services/task'

class App extends React.Component {
    state = {
        tasks: [],
    }

    handleTaskRemove = task => {
        const tasks = this.state.tasks.filter(t => t.label !== task.label)
        removeTask({ label: task.label })
        this.setState({ tasks })
    }

    handleTaskAdd = nextTask => {
        if (!nextTask) return

        const exists = this.state.tasks.find(t => t.label === nextTask)
        if (exists) return

        const newTask = { label: nextTask, done: false }
        const tasks = [...this.state.tasks, newTask]

        addTask(newTask)
        this.setState({ tasks })
    }

    handleToggleStatus = task => {
        const tasks = this.state.tasks.map(t =>
            t.label === task.label ? { label: t.label, done: !t.done } : t
        )
        toggleTask(task)
        this.setState({ tasks })
    }

    componentDidMount() {
        const tasks = getTasks()
        this.setState({ tasks })
    }

    render() {
        const { tasks } = this.state
        return (
            <div>
                <Header handleTaskAdd={this.handleTaskAdd} />
                <TaskList
                    tasks={tasks}
                    handleToggleStatus={this.handleToggleStatus}
                    handleTaskRemove={this.handleTaskRemove}
                />
            </div>
        )
    }
}

export default App
