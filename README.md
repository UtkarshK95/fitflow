# FitFlow

FitFlow is a web application designed to help users track and manage their workouts. The project is built with a Node.js server and a React frontend, providing a seamless experience for managing workout routines.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, update, and delete workouts
- View a list of all workouts
- Responsive design for mobile and desktop

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd fitflow/server
   ```
2. Install server dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your environment variables:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd fitflow/client
   ```
2. Install client dependencies:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Use the application to add, update, and view your workouts.

## Project Structure

### Server

- `server.js`: Entry point for the server
- `.env`: Environment variables
- `package.json`: Server dependencies
- `models/`: Mongoose models
  - `workoutModel.js`: Workout data model
- `controllers/`: Controllers for handling requests
  - `workoutController.js`: Logic for workout operations
- `routes/`: API routes
  - `workouts.js`: Routes for workout endpoints

### Client

- `index.html`: Main HTML file
- `.eslintrc.cjs`: ESLint configuration
- `vite.config.js`: Vite configuration
- `package.json`: Client dependencies
- `public/`: Public assets
  - `favicon.ico`: Favicon
- `src/`: Source code
  - `main.jsx`: React entry point
  - `App.jsx`: Main app component
  - `context/`: React context for state management
    - `WorkoutsContext.jsx`: Workout context
  - `components/`: React components
    - `WorkoutDetails.jsx`: Component to display workout details
    - `WorkoutForm.jsx`: Form to add or edit workouts
    - `Navbar.jsx`: Navigation bar
  - `hooks/`: Custom hooks
    - `useWorkoutsContext.jsx`: Hook to use workout context
  - `pages/`: Page components
    - `UpdateWorkout.jsx`: Page to update workouts
    - `Home.jsx`: Home page

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the ISC License.
