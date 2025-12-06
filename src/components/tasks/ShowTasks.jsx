


function ShowTasks({tasks, toggleCompletion}) {  return (
    <div>
     {tasks.length > 0 ? <ul>
        {tasks.map((task) => (
            <li key={task.id} onClick={() => toggleCompletion(task.id)} style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}>{task.text}</li>
        ))}
     </ul>  : <p>No tasks available</p>}
    </div>
  );
}

export default ShowTasks;