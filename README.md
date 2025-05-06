# 📋 Task Management App
A simple and responsive React-based task management application that allows authenticated users to manage their tasks efficiently.

## 🚀 Features
✅ Authentication

Secure login using Auth0

Only authenticated users can manage tasks

## ✅ Task Management

View task details (title, description, start date, end date, urgency, status)

Create new tasks

Edit task information

Mark tasks as completed or pending

Delete tasks

## ✅ Responsive UI

Built with React-Bootstrap for mobile-friendly design

## ✅ State Management

Uses React Context API for managing global task state

## 🛠️ Tech Stack
React – Front-end UI library

TypeScript – Static typing for better reliability

React-Bootstrap – Pre-styled responsive UI components

React Context API – Global state management

Auth0 – Secure authentication and user management

# 🔍 How It Works
## 1. Authentication
Users sign in using Auth0. Only authenticated users can access the dashboard and perform task operations.

## 2. Task Context
The TaskContext provides shared state and task operations:

addTask()

editTask()

deleteTask()

toggleTaskCompletion()

These are made globally available through the TaskProvider.

## 3. User Flow
Sign in with Auth0

View and manage your tasks via the dashboard

Use the task editor modals to add or update details

Mark tasks as completed or delete them as needed
