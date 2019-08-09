const STORAGE_KEY = 'tasks'

const saveTasks = tasks => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export const getTasks = () => {
    const strTasks = localStorage.getItem(STORAGE_KEY)
    return JSON.parse(strTasks ? strTasks : '[]')
}

export const addTask = task => {
    const toBeSaved = [...getTasks(), task]
    saveTasks(toBeSaved)
}

export const removeTask = task => {
    const toBeSaved = getTasks().filter(t => t.label !== task.label)
    saveTasks(toBeSaved)
}

export const toggleTask = task => {
    const toBeSaved = getTasks().map(t =>
        t.label === task.label ? { label: t.label, done: !t.done } : t
    )
    saveTasks(toBeSaved)
}

export const removeAllTasks = () => {
    saveTasks([])
}
