function TaskItem({ id, title, completed, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        id={`task-${id}`}
        checked={completed}
        onChange={() => onToggle(id)}
      />

      <label htmlFor={`task-${id}`}>
        {title}
      </label>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem