import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "./actions";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return { tasks: [] };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Error loading state from local storage", e);
    return { tasks: [] };
  }
};

const initialState = loadState();

let nextTaskId = initialState.tasks.length
  ? initialState.tasks[initialState.tasks.length - 1].id + 1
  : 0;

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
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
          ...state.tasks,
          { id: nextTaskId++, text: action.payload.text },
        ],
      };
      break;
    case DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      break;
    case EDIT_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
      break;
    case TOGGLE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
      break;
    default:
      newState = state;
  }
  saveState(newState);
  return newState;
};

export default reducer;
