import { useState } from "react";
import Create from "./Create";

const Home = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>No Record</div>
      ) : (
        todos.map((todo) => <div key="todo">{todo}</div>)
      )}
    </div>
  );
};

export default Home;
