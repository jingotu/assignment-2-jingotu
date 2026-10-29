function TaskCounter({ tasks }) {
  const totalTasks = tasks.length

  const completedTasks = tasks.filter(
    task => task.completed
  ).length

  return (
    <span>
      {completedTasks}/{totalTasks}
    </span>
  )
}

export default TaskCounter