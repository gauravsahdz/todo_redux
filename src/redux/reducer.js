import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "./actions";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks"); // Load the tasks from local storage
    if (serializedState === null) {
      return { tasks: [] }; // If there are no tasks, return an empty array
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Error loading state from local storage", e);
    return { tasks: [] };
  }
};

const initialState = loadState();

// Get the next task ID
let nextTaskId = initialState.tasks.length
  ? initialState.tasks[initialState.tasks.length - 1].id + 1
  : 0;

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state); // Save the tasks to local storage
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Error saving state to local storage", e);
  }
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [
          // Add a new task to the tasks array
          ...state.tasks,
          { id: nextTaskId++, text: action.payload.text }, // Assign the next task ID
        ],
      };
      break;
    case DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id), // Remove the task with the specified ID
      };
      break;
    case EDIT_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text } // Update the task with the specified ID
            : task
        ),
      };
      break;
    case TOGGLE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed } // Toggle the completed status of the task with the specified ID
            : task
        ),
      };
      break;
    default:
      newState = state;
  }
  saveState(newState); // Save the updated state to local storage
  return newState;
};

export default reducer;
