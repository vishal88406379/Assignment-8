# To-Do List Application

A full-stack To-Do List application with a Node.js/Express backend and React frontend, integrated with MongoDB for data persistence.

## Project Structure

```
.
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    ├── index.html
    └── package.json
```

## Backend (Node.js/Express/MongoDB)

### Features

- Create, read, update, and delete (CRUD) operations for todos
- Mark todos as complete/incomplete
- Filter todos by completion status and priority
- Search todos by title or description
- Pagination support
- Data validation and error handling

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Getting Started

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todoapp
   NODE_ENV=development
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. The API will be running at `http://localhost:5000`

### API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/todos`       | Get all todos (with filters) |
| GET    | `/api/todos/:id`   | Get a specific todo          |
| POST   | `/api/todos`       | Create a new todo            |
| PUT    | `/api/todos/:id`   | Update a todo                |
| DELETE | `/api/todos/:id`   | Delete a todo                |
| PATCH  | `/api/todos/:id/toggle` | Toggle todo completion  |

### Query Parameters for GET /api/todos

- `page` - Page number (default: 1)
- `limit` - Number of items per page (default: 10)
- `search` - Search term for title or description
- `completed` - Filter by completion status (true/false)
- `priority` - Filter by priority (low/medium/high)

### Todo Object

```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "priority": "string", // low, medium, high
  "dueDate": "date",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Example Requests

#### Create a new todo
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Complete the Node.js tutorial", "priority": "high"}'
```

#### Get all todos
```bash
curl http://localhost:5000/api/todos
```

#### Get todos with filters
```bash
curl "http://localhost:5000/api/todos?completed=false&priority=high&page=1&limit=5"
```

### Deployment

For production deployment, update the `.env` file with your production database URI and set `NODE_ENV=production`.

## Frontend (React)

### Features

- Create, read, update, and delete (CRUD) operations for todos
- Mark todos as complete/incomplete
- Search todos by title or description
- Responsive design that works on desktop and mobile devices
- Real-time updates with instant feedback

### Prerequisites

- Node.js (v14 or higher)
- The backend API server must be running

### Getting Started

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The frontend will be running at `http://localhost:3000`

## Challenges Faced and Solutions

### Backend Challenges

1. **Data Validation**: Implemented comprehensive validation in the controller to ensure data integrity.
2. **Pagination**: Added pagination support to handle large datasets efficiently.
3. **Filtering and Search**: Implemented flexible filtering and search capabilities using MongoDB queries.
4. **Error Handling**: Created consistent error handling middleware to provide meaningful error messages.

### Frontend Challenges

1. **State Management**: Used React's useState and useEffect hooks to manage application state efficiently.
2. **Real-time Updates**: Implemented immediate UI updates after API calls to provide a responsive user experience.
3. **Error Handling**: Added comprehensive error handling with user-friendly error messages.
4. **Responsive Design**: Created a responsive layout that works well on both desktop and mobile devices.
5. **Search Functionality**: Implemented debounced search to reduce API calls while typing.