# ToDo API - Basic GET and DELETE Operations

A simple Express.js REST API implementation focused on implementing basic GET and DELETE operations for a ToDo application.

## Overview

This project was created as a practice exercise to implement basic GET and DELETE functionality for a ToDo API using Node.js and Express.js. The task focused on building fundamental CRUD operations with proper routing and controller separation.

## Task Completed Today

✅ **Implemented Basic ToDo API with GET and DELETE Operations**

- Set up Express.js server and routing
- Created controller functions for business logic
- Implemented GET endpoint to retrieve all ToDo items
- Implemented DELETE endpoint to remove specific ToDo items
- Configured proper project structure with separation of concerns
- Added Git version control and committed changes

## Features

- **GET** `/` - Retrieve all ToDo items
- **DELETE** `/:id` - Delete a specific ToDo item by ID

```
├── controllers/
│   └── toDoController.js    # Controller functions for business logic
├── router/
│   └── toDorouter.js        # Express router configuration
├── server.js                # Main server file
├── app.js                   # Application setup
├── test-server.js           # Testing utilities
└── package.json             # Dependencies and scripts
```

## Project Structure

### Prerequisites

- Node.js installed on your machine
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

```bash
node server.js
```

The server will start on `http://localhost:3000`

## API Endpoints

### Get All ToDos
```
GET /
```
Returns all ToDo items in the system.

### Delete ToDo
```
DELETE /:id
```
Deletes a specific ToDo item by its ID.

**Parameters:**
- `id` (path parameter) - The ID of the ToDo item to delete

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **ES6 Modules** - Modern JavaScript import/export syntax

## Development Notes

**Today's Implementation:**
- Modified: `controllers/toDoController.js`, `package.json`, `router/toDorouter.js`, `server.js`
- Added: `app.js`, `test-server.js`
- Focused on basic GET and DELETE operations as per practice requirements
- Used ES6 modules for modern JavaScript syntax
- Implemented proper Express.js routing patterns

**Git Commit:**
```bash
git commit -m "Implement basic ToDo API with GET and DELETE operations"
```

## Getting Started

This exercise focused on:
- Setting up Express.js routes
- Implementing controller functions
- Understanding REST API conventions
- Practicing Git version control
- Separating concerns (routes vs controllers)

## Learning Objectives

Future enhancements could include:
- POST endpoint for creating new ToDos
- PUT/PATCH endpoints for updating existing ToDos
- Data persistence (database integration)
- Input validation and error handling
- Unit tests
