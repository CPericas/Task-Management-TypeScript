Task Management App
Overview
This is a React-based Task Management application that allows authenticated users to:

View task details

Edit task details (title, description, etc.)

Mark tasks as completed or incomplete

Delete tasks

Sign in securely using Auth0 for user authentication

The app is built using React, React-Bootstrap, Auth0 for authentication, and the React Context API for global state management.

Features
Authentication: Secure user login using Auth0.

Task Management:

View task details, including title, description, start date, and urgency.

Edit task details (title, description, start date, and urgency).

Toggle task completion (mark as complete or undo completion).

Delete tasks from the list.

Responsive UI: Built with React-Bootstrap for responsive UI components.

State Management: Manage tasks using React Context for a global state.

Technologies Used
React: JavaScript library for building user interfaces.

React-Bootstrap: Bootstrap components for React.

React Context API: For global state management of tasks.

Auth0: Authentication and authorization service for secure user login.

TypeScript: For type safety and better development experience.

How it Works
Authentication: The app uses Auth0 to handle user authentication. Upon successful login, users can view and manage their tasks.

Task Context: The TaskContext holds the application’s task data and provides functions to add, edit, delete, and toggle task completion. This context is provided globally through the TaskProvider component.

Task Management: The app displays tasks, allows users to edit task details, toggle completion, and delete tasks from the list.
