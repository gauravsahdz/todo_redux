import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // Add a new task
  const handleAddTask = () => {
    // Check if the task is not empty
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the action to add a new task
      setTask("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
