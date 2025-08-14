# NASA Dashboard Frontend

## Overview
This is the frontend part of the NASA Dashboard application, built using React and TypeScript. The application allows users to select a date and view a list of Near Earth Objects (NEOs) from NASA's API, providing details such as size, closeness to Earth, and relative velocity.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/nasa-dashboard.git
   ```
2. Navigate to the frontend directory:
   ```
   cd nasa-dashboard/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
This will generate an optimized build of the application in the `build` directory.

## Components
- **DatePicker**: A component that allows users to select a date for fetching NEO data.
- **NeoTable**: Displays the list of NEOs in a table format, with sorting functionality.
- **SortControls**: Provides options for sorting the displayed NEOs by size, closeness to Earth, or relative velocity.

## API Integration
The frontend communicates with the backend API to fetch NEO data based on the selected date. Ensure the backend is running to successfully retrieve data.

## Linting and Formatting
This project uses ESLint for linting and Prettier for code formatting. You can run the following commands to check for linting errors or format the code:
- Linting: `npm run lint`
- Formatting: `npm run format`

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- NASA API for providing the data on Near Earth Objects.
- React and TypeScript for building the frontend application.