import './App.css'

import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Call Mom', completed: false },
    { id: 2, title: 'Buy the new issue of Scientific American', completed: false },
    { id: 3, title: 'Return the textbook to Josie', completed: false },
    { id: 4, title: 'Buy the new album by Rake', completed: false },
    { id: 5, title: 'Buy a gift card for Dad', completed: false }
  ])

  const [filter, setFilter] = useState('all')
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    )
  }

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }

    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') {
      return !task.completed
    }

    if (filter === 'completed') {
      return task.completed
    }

    return true
  })

  return (
    <div className="app">
      <header className="main-header">
        <button
          className="menu-button"
          type="button"
          aria-label="Open menu"
        >
          <img src={menuIcon} alt="" />
        </button>

        <div className="search-box" role="search">
          <img src={searchIcon} alt="" />

          <input
            type="search"
            id="quick-find"
            name="quick-find"
            placeholder="Quick find"
            aria-label="Quick find"
          />
        </div>

        <div className="task-counter" aria-label="Task progress">
          <img src={checkIcon} alt="" />
          <TaskCounter tasks={tasks} />
        </div>
      </header>

      <div className="page-layout">
        <nav className="sidebar">
          <ul className="nav-list">
            <li className="nav-item active">
              <img src={inboxIcon} alt="" />
              <span>Inbox</span>
              <span className="task-count">5</span>
            </li>

            <li className="nav-item">
              <img src={calendarIcon} alt="" />
              <span>Today</span>
              <span className="task-count">5</span>
            </li>

            <li className="nav-item">
              <img src={upcomingIcon} alt="" />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <section className="task-section">
            <h1>Inbox</h1>
            <TaskForm onAdd={addTask} />
            <div className="filter-buttons">
              <button
                type="button"
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
                aria-pressed={filter === 'all'}
              >
                All
              </button>

              <button
                type="button"
                className={filter === 'active' ? 'active' : ''}
                onClick={() => setFilter('active')}
                aria-pressed={filter === 'active'}
              >
                Active
              </button>

              <button
                type="button"
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
                aria-pressed={filter === 'completed'}
              >
                Completed
              </button>
            </div>
            <TaskList
              tasks={filteredTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </section>
        </main>
      </div>

    </div>
  )
}

export default App