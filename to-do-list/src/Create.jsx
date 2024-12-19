// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from 'axios'
import "./App.css";
const Create = () => {
  const [task, setTask] = useState([]);
  const handleAdd = () => {
    axios.post('http://localhost:3000/add'. {task: task})
    .then(res => console.log(res))
    .catch(err =>console.log(err))
  };
  return (
    <div className="createForm">
      <input
        className="input"
        type="text"
        name=""
        id=""
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="button" type="button" onClick={handleAdd}>
        Add{" "}
      </button>
    </div>
  );
};

export default Create;
