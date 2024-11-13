# Simple Task Manager

A lightweight task management application built with React. This app provides an easy-to-use interface for managing tasks, including features like adding, editing, deleting, and prioritizing tasks. It uses the browser's local storage to save tasks, making them persistent across sessions.

## Features

- **Dashboard View**: A categorized display for tasks, including:
  - **Upcoming Tasks**: Tasks due in the future.
  - **Overdue Tasks**: Tasks past their due date.
  - **Completed Tasks**: Tasks marked as completed.
- **Task Management**:
  - **Add New Tasks**: Users can add tasks with a title, description, due date, and priority level.
  - **Edit and Delete Tasks**: Modify task details or delete tasks.
  - **Complete Tasks**: Mark tasks as completed, moving them to the "Completed" section.
- **Priority Levels**: Choose between High, Medium, or Low priority for tasks.
- **Search and Filter**:
  - **Search**: Quickly find tasks by typing in keywords from the title.
  - **Filter**: Filter tasks by priority level and completion status.
- **Data Persistence**: Uses `localStorage` to save tasks, keeping data available across browser sessions.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/simple-task-manager.git
   cd simple-task-manager

   npm install

   npm start

