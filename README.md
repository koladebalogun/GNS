# GNS

#GAS Scrapper

#BACKEND

Gas Scraper Backend The Gas Scraper Backend is a Node.js application that utilizes Puppeteer to scrape Med Gas prices from the Snowtrace website and stores the data in a MongoDB database.

Prerequisites

Node.js and npm: Download and Install Node.js MongoDB: Download and Install MongoDB

Installation

Clone the repository: git clone https://github.com/your-username/gas-scraper-backend.git

Navigate to the backend directory:

cd gas-scraper-backend

Install dependencies: npm install

Configuration

Create a .env file in the backend directory with the following content: env MONGODB_URI=your-mongodb-connection-string

Replace your-mongodb-connection-string with your actual MongoDB connection string.

Usage Start the backend server:

npm start

The scraper will run once and save the scraped data to the MongoDB database.

Folder Structure models: MongoDB schema and models routes: Express routes GasScraper.js: Med Gas price scraping logic index.js: Express server configuration

#FRONTEND

Gas Scraper Frontend The Gas Scraper Frontend is a React application that fetches and displays Med Gas prices chronologically. It includes a table to show gas prices and a Chart.js Line chart to visualize the prices over time.

Prerequisites

Node.js and npm: Download and Install Node.js Installation

Clone the repository: git clone https://github.com/your-username/gas-scraper-frontend.git

Navigate to the frontend directory: cd gas-scraper-frontend

Install dependencies: npm install

Usage

Start the frontend development server:

npm start

Access the application in your browser at http://localhost:3000.

Dependencies

axios: HTTP client for making requests to the backend react-spinners: Library for adding loading spinners to React components