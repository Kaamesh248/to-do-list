import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  }

  return (
    <div>
      <h1>To-do-List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Submit</button>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

export default App;