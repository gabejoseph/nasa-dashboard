# NASA Dashboard Backend

## Overview
This backend service is built using Fastify and TypeScript, designed to interact with the NASA API to fetch data about Near Earth Objects (NEOs). The service provides endpoints to retrieve information based on user-selected dates.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd nasa-dashboard/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application
To start the Fastify server, run:
```
npm run start
```
The server will be available at `http://localhost:3000`.

### API Endpoints
- **GET /neo**: Fetches a list of Near Earth Objects for a specified date range.
  - Query parameters:
    - `start_date`: The start date for fetching NEOs (format: YYYY-MM-DD).
    - `end_date`: The end date for fetching NEOs (format: YYYY-MM-DD).

## Directory Structure
- `src/index.ts`: Entry point for the Fastify application.
- `src/controllers/neo.ts`: Contains the NeoController class for handling NEO-related requests.
- `src/routes/neo.ts`: Defines the API routes and links them to the controller methods.
- `src/services/nasaApi.ts`: Functions for interacting with the NASA API.
- `src/types/index.ts`: TypeScript interfaces for type safety.

## OpenAPI Specification
The OpenAPI 3 schema for the API is defined in `openapi.yaml`, which outlines the endpoints, request parameters, and response formats.

## Linting and Formatting
This project uses ESLint and Prettier for code quality and formatting. You can run the linting and formatting scripts using:
```
npm run lint
npm run format
```

## Additional Notes
- The NASA API requires an API key. You can use the `DEMO_KEY` for testing purposes, but for production, consider signing up for a private key.
- Caching mechanisms can be implemented to improve performance, especially for frequently requested data.

Feel free to explore the code and contribute to the project!