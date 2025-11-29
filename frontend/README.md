# To-Do List Frontend

A React-based frontend for the To-Do List application that integrates with the Node.js/Express backend.

## Features

- Create, read, update, and delete (CRUD) operations for todos
- Mark todos as complete/incomplete
- Search todos by title or description
- Responsive design that works on desktop and mobile devices
- Real-time updates with instant feedback

## Prerequisites

- Node.js (v14 or higher)
- The backend API server must be running

## Getting Started

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

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
```

## API Integration

The frontend communicates with the backend API through the following endpoints:

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo

## Challenges Faced and Solutions

1. **State Management**: Used React's useState and useEffect hooks to manage application state efficiently.
2. **Real-time Updates**: Implemented immediate UI updates after API calls to provide a responsive user experience.
3. **Error Handling**: Added comprehensive error handling with user-friendly error messages.
4. **Responsive Design**: Created a responsive layout that works well on both desktop and mobile devices.
5. **Search Functionality**: Implemented debounced search to reduce API calls while typing.

## Deployment

To build the application for production:

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

For deployment, you can use services like Netlify, Vercel, or GitHub Pages.