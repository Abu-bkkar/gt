import { useState } from 'react';


function CreateTask({addNewTask}) {
    const [text, setText] = useState('');
    return(
        <div>
            <input type="text" placeholder="Enter task name" value={text}  onChange={(event)=>{
                setText(event.target.value)
            }}/>
            <button onClick={()=>{if(text){addNewTask(text); setText('');} else{alert('Please enter a task name')}}}>Create task</button>
        </div>
    )
}

export default CreateTask;