import { useState } from "react";
import Layout from "../components/layout/Layout";
import CreateTask from "../components/tasks/CreateTask";
import shortid from "shortid";
import ShowTasks from "../components/tasks/ShowTasks";



function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [visibility, setVisibility] = useState('all');

    const addNewTask = (text) => {
      const task ={
        text: text,
        isCompleted: false,
        id: shortid.generate(),
      }
        setTasks([...tasks, task]);
    }
 const toggleCompletion = (id) => {
    const newTaskes = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }   
    });
    setTasks(newTaskes);
 };
    const changeVisibility = (newVisibility) => {
      setVisibility(newVisibility);
    };
 
    function getFilteredTasks() {
      if (visibility === 'completed') {
        return tasks.filter((task) => task.isCompleted);
      } else if (visibility === 'incomplete') {
        return tasks.filter((task) => !task.isCompleted);
      } else {
        return tasks;
      }
    }

  return (
    <Layout>
      <h1>Tasks</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks tasks={getFilteredTasks()} toggleCompletion={toggleCompletion} />
      <button onClick={() => changeVisibility('all')}>All</button>
      <button onClick={() => changeVisibility('completed')}>Completed</button>
      <button onClick={() => changeVisibility('incomplete')}>Incomplete</button>
    </Layout>
    
  );
}

export default Tasks;