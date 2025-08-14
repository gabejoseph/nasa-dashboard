# NASA Dashboard

Welcome to the NASA Dashboard project! This application displays a list of the closest Near Earth Objects (NEOs) to Earth for any given date using data from the NASA API.

---

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using Fastify and TypeScript. It handles API requests, fetches data from NASA's NeoWs API, transforms it to include size, closeness, and relative velocity, and caches results in-memory for performance.

- **Entry Point**: `backend/src/index.ts`
- **Routes**: `backend/src/routes/neo.ts` (with caching and date validation)
- **Services**: `backend/src/services/nasaApi.ts` (fetch & transform NASA data)
- **Types**: `backend/src/types/index.ts`
- **OpenAPI Schema**: `backend/openapi.yaml`
- **Package Configuration**: `backend/package.json`
- **TypeScript Configuration**: `backend/tsconfig.json`
- **Documentation**: `backend/README.md`

### Frontend

The frontend is built using React and TypeScript. Users can select a date and view a list of NEOs in a sortable table.

- **Main Component**: `frontend/src/App.tsx`
- **Components**: 
  - `frontend/src/components/DatePicker.tsx`
  - `frontend/src/components/NeoTable.tsx`
  - `frontend/src/components/SortControls.tsx`
- **API Calls**: `frontend/src/api/neo.ts` (calls backend `/api/neo` with dates)
- **Types**: `frontend/src/types/index.ts`
- **Package Configuration**: `frontend/package.json`
- **TypeScript Configuration**: `frontend/tsconfig.json`
- **Documentation**: `frontend/README.md`

---

## Features Implemented

- Select a date using a date picker.
- Fetch NEOs for the selected date from the backend API.
- Display each object with:
  - **Name**
  - **Size (meters)**
  - **Closeness to Earth (km)**
  - **Relative Velocity (km/h)**
- Sort the table by size, closeness, or velocity.
- In-memory caching on the backend for 1 minute per date range.
- Logs requests and cache usage in the backend.
- Full TypeScript typing for safety.

<details>
<summary>Setup Instructions</summary>

### Prerequisites

- Node.js 14+
- npm

### Installation

1. Clone the repository:

git clone <repository-url>
cd nasa-dashboard

2.  Install backend dependencies:

cd backend
npm install

3.  Install frontend dependencies:

cd ../frontend
npm install
Running the Application

4.  Start the backend server:

cd backend
npm run start

5.  Start the frontend application:

cd ../frontend
npm run start
Open your browser at http://localhost:3000 to view the dashboard.

## GET /api/neo
Fetch NEOs for a specific date range.

Query Parameters:

start_date (YYYY-MM-DD, required)

end_date (YYYY-MM-DD, required)

Response Example:

json
[
  {
    "id": "12345",
    "name": "(2025 ME89)",
    "size": 123.4,
    "closeness": 456789.0,
    "velocity": 12345.6
  }
]

## Notes:

Returns transformed NEO data with size, closeness, and velocity.

Invalid or missing dates return 400 Bad Request.

Caching reduces repeated API calls for the same date.

Frontend updates table whenever the selected date changes.

Sorting is done client-side.

Backend handles caching, data transformation, and logging.

NASA API key is set to DEMO_KEY for testing but can be replaced with a private key.

License
MIT License