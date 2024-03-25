import './TasksList.css';

import { useState } from "react";

const TasksList = (props) => {
  const [task, setTask] = useState("");
  function updateTask(newTask){
    setTask(newTask);
  }
  const [tasks, setTasks] = useState([
    {id: 1, name: "Grade assignment 2"},
    {id: 2, name: "Grade project 2"}, 
    {id: 3, name: "Grade capstone projects BS"},
    {id: 4, name: "Grade projects GS"}
  ]);
  function updateTasks(newTask){
    setTasks(newTask);
  }

  const litems = [];
  tasks.forEach(task => {
    litems.push(<tr key={task.id}><td>{task.name}</td></tr>);
  });
  return(
    <div>
      <section className="add-task-section">
        <label>Task:</label>
        <input type="text" value={task} onChange={updateTask}></input>
        <button onClick={() => updateTasks()}>Add task</button>
      </section>
      <section className="tasks-list-section">
        <table>
          <thead><tr><th>Task</th></tr></thead>
          <tbody>
            {litems}
          </tbody>

        </table>
    </section>
    </div>

  );
};

export default TasksList;