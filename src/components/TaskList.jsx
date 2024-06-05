import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task.text}
          id={task.id}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
