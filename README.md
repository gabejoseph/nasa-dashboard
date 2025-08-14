# NASA Dashboard

Welcome to the NASA Dashboard project! This application is designed to display a list of the closest Near Earth Objects (NEOs) to Earth for any given date using data from the NASA API.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using Fastify and TypeScript. It handles API requests and interacts with the NASA API to fetch data.

- **Entry Point**: `backend/src/index.ts`
- **Controllers**: `backend/src/controllers/neo.ts`
- **Routes**: `backend/src/routes/neo.ts`
- **Services**: `backend/src/services/nasaApi.ts`
- **Types**: `backend/src/types/index.ts`
- **OpenAPI Schema**: `backend/openapi.yaml`
- **Package Configuration**: `backend/package.json`
- **TypeScript Configuration**: `backend/tsconfig.json`
- **Documentation**: `backend/README.md`

### Frontend

The frontend is built using React with TypeScript. It provides a user interface for selecting dates and displaying NEO data.

- **Main Component**: `frontend/src/App.tsx`
- **Components**: 
  - `frontend/src/components/DatePicker.tsx`
  - `frontend/src/components/NeoTable.tsx`
  - `frontend/src/components/SortControls.tsx`
- **API Calls**: `frontend/src/api/neo.ts`
- **Types**: `frontend/src/types/index.ts`
- **Package Configuration**: `frontend/package.json`
- **TypeScript Configuration**: `frontend/tsconfig.json`
- **Documentation**: `frontend/README.md`

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nasa-dashboard
   ```

2. Install dependencies for the backend:
   ```
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm run start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Additional Notes

- The backend API uses the NASA API to fetch data about Near Earth Objects. You can use the demo key provided in the API documentation for testing.
- The application includes features for sorting the displayed NEOs by size, closeness to Earth, and relative velocity.

## License

This project is licensed under the MIT License. See the LICENSE file for details.