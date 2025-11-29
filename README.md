# To-Do List Application

A full-stack To-Do List application with a Node.js/Express backend and React frontend, integrated with MongoDB for data persistence.

## Project Structure

```
.
├── backend/
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── .env
│   ├── package.json
│   ├── README.md
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── README.md
    └── vite.config.js
```

## Features

### Backend (Node.js/Express/MongoDB)

- Create, read, update, and delete (CRUD) operations for todos
- Mark todos as complete/incomplete
- Filter todos by completion status and priority
- Search todos by title or description
- Pagination support
- Data validation and error handling

### Frontend (React)

- Create, read, update, and delete (CRUD) operations for todos
- Mark todos as complete/incomplete
- Search todos by title or description
- Responsive design that works on desktop and mobile devices
- Real-time updates with instant feedback

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todoapp
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The API will be running at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be running at `http://localhost:3000`

## API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/todos`       | Get all todos (with filters) |
| GET    | `/api/todos/:id`   | Get a specific todo          |
| POST   | `/api/todos`       | Create a new todo            |
| PUT    | `/api/todos/:id`   | Update a todo                |
| DELETE | `/api/todos/:id`   | Delete a todo                |
| PATCH  | `/api/todos/:id/toggle` | Toggle todo completion  |

## Deployment Instructions

### Backend Deployment

1. Update the `.env` file with your production database URI
2. Set `NODE_ENV=production` in the `.env` file
3. Deploy to a Node.js hosting service (e.g., Render, Heroku)

### Frontend Deployment

1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` directory to a static hosting service (e.g., Netlify, Vercel)

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

## Submission Links

- GitHub Repository: [Add your GitHub repository link here]
- Frontend Deployment: [Add your Netlify/Vercel deployment link here]
- Backend Deployment: [Add your Render/Heroku deployment link here]

## Google Form Submission

[Add Google form link here]