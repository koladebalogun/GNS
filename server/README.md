Gas Scraper Backend
The Gas Scraper Backend is a Node.js application that utilizes Puppeteer to scrape Med Gas prices from the Snowtrace website and stores the data in a MongoDB database.

Prerequisites

Node.js and npm: Download and Install Node.js
MongoDB: Download and Install MongoDB


Installation

Clone the repository: git clone https://github.com/your-username/gas-scraper-backend.git

Navigate to the backend directory:

cd gas-scraper-backend


Install dependencies:
npm install


Configuration

Create a .env file in the backend directory with the following content:
env
MONGODB_URI=your-mongodb-connection-string

Replace your-mongodb-connection-string with your actual MongoDB connection string.

Usage
Start the backend server:

npm start

The scraper will run once and save the scraped data to the MongoDB database.


Folder Structure
models: MongoDB schema and models
routes: Express routes
GasScraper.js: Med Gas price scraping logic
index.js: Express server configuration