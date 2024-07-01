# 📝 Task Management System with Angular

This project is a web application for task management developed with Angular. It allows basic operations such as creating, deleting, and viewing tasks. Below are the main components and functionalities of the system.

## 📋 Main Components

### ListarTareasComponent

The `ListarTareasComponent` is responsible for displaying the list of tasks in a table. Each task is presented with its identifier (id), title, completion date, and action options. The functionalities include:

- **Task Processing**: You can select a task by clicking on the corresponding row. The selection indicates that the task was completed and can be reverted by clicking again.
- **Delete Task**: A "Delete" button is provided to remove the selected task.

### CreaeditaTareasComponent

The `CreaeditaTareasComponent` manages the creation and editing of tasks. It includes a form with fields for the task title and completion date. The features are:

- **Task Form**: An interactive form that allows you to enter the title and completion date of a task.
- **Field Validation**: The title and completion date fields are validated. An error message is displayed if they are not filled out correctly.
- **Creating and Editing Tasks**: You can create new tasks or edit existing ones using this component.

## 🛠️ Services

### TareasService

The `TareasService` provides methods to interact with tasks, such as listing, inserting, and deleting. It uses a `Tareas` model to represent the structure of the tasks.

## 🚀 Using the Project

### Installing Dependencies

Run the following command in the application console before using it on the frontend:

npm install

### Running the Project

Use either of the following commands to run the project. To see the changes, the backend should be running using PostgreSQL and IntelliJ IDEA:

ng serve

or

ng s

The application will be available at http://localhost:4200/.

---

I hope you enjoy this web application.

Developed by Gustavo Farje
