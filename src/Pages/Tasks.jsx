import { useState } from "react";
import Layout from "../components/layout/Layout";
import CreateTask from "../components/tasks/CreateTask";
import shortid from "shortid";
import ShowTasks from "../components/tasks/ShowTasks";



function Tasks() {
    const [tasks, setTasks] = useState([]);
    // const [visibility, setVisibility] = useState('all');

    const addNewTask = (text) => {
      const task ={
        text: text,
        isCompleted: false,
        id: shortid.generate(),
      }
        setTasks([...tasks, task]);
    }

  return (
    <Layout>
      <h1>Tasks</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} />
    </Layout>
    
  );
}

export default Tasks;