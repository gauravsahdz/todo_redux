## To-Do List Application

This project is a simple To-Do list application built with React and Redux. It allows users to add, view, edit, and delete tasks. Tasks are persisted in the browser's local storage, ensuring that they are not lost on page reload.

### Features

- Add new tasks
- View a list of tasks
- Edit tasks
- Delete tasks
- Persist tasks in local storage

### Project Structure

`my-todo-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskItem.js
│   │   └── TaskList.js
│   ├── store/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md`

### Installation

1.  Clone the repository

        `git clone https://github.com/your-username/my-todo-app.git

    cd my-todo-app`

2.  Install dependencies

    `npm install`

3.  Run the application

    `npm start`

    The application will be available at `http://localhost:3000`.

4.  If getting this error `Error: Cannot find module 'ajv/dist/compile/codegen'`

    `npm install --save-dev ajv@^7`

### Usage

1.  Add a Task

    - Type a task into the input field and click the "Add Task" button or press Enter.

2.  View Tasks

    - Tasks will be displayed in a list below the input field.

3.  Edit a Task

    - Click the "Edit" button next to a task, update the task text, and click "Save".

4.  Delete a Task

    - Click the "Delete" button next to a task to remove it from the list.

### Code Overview

#### Components

- TaskInput.js

  - Contains an input field and a button to add new tasks.
  - Uses React hooks (`useState`) and Redux's `useDispatch` to manage state and dispatch actions.

- TaskItem.js

  - Represents an individual task item.
  - Allows editing and deleting tasks.
  - Uses React hooks (`useState`) and Redux's `useDispatch` to manage state and dispatch actions.

- TaskList.js

  - Displays a list of tasks.
  - Uses Redux's `useSelector` to access the state.

#### Redux Store

- actions.js

  - Defines action types and action creators for adding, deleting, and editing tasks.

- reducer.js

  - Defines the initial state and the reducer function to handle actions.
  - Includes logic to load the initial state from local storage and save the state to local storage on updates.

- store.js

  - Creates and exports the Redux store.

#### Main Application

- App.js

  - The main application component that renders `TaskInput` and `TaskList`.

- index.js

  - The entry point of the application that renders the `App` component inside a Redux `Provider`.
  - Uses `createRoot` from React 18 for rendering.

#### Styles

- App.css
  - Contains basic styling for the application components.

### Future Enhancements

- Mark tasks as completed.
- Filter tasks (e.g., show only completed or active tasks).
- Add due dates and reminders for tasks.
- Improve the UI/UX with more advanced styling and animations.
