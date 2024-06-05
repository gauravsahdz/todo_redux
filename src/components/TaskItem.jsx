import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/actions";

const TaskItem = ({ task, id, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEditTask = () => {
    if (newTask.trim()) {
      dispatch(editTask(id, newTask)); // Dispatch the action to edit the task
      setIsEditing(false); // Exit the editing mode
    }
  };

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              width: "70%",
              marginRight: "10px",
              padding: "5px",
              fontSize: "16px",
            }}
          />
          <button className="save" onClick={handleEditTask}>
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTask(id))} // Dispatch the action to toggle the task
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          />
          <span>{task}</span>
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete" onClick={() => dispatch(deleteTask(id))}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
