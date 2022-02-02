# Getting Started with Fishfry Tours
This application can be used to track and change that status of a fleet of tour boats

# Stack description:
This application uses the following:
React Frontend - Scaffolding via [create-react-app] (https://github.com/facebook/create-react-app)
Technologies used in the FrontEnd include:
-create react app
-react router
-react bootstrap via npm install react-bootstrap 
-styled components

Express Middleware - Scaffolding via [express-generator] (https://expressjs.com/en/starter/generator.html)
Technologies used in the Express middleare include:
-express-generator framework
Testing dependencies: jest - supertest - cross-env
npm install jest --save-dev
npm install supertest --save-dev
npm install cross-env --save-dev

Postgres Database
See /sql for migration scripts / seeds
*Important* You must seed the swimlanes

# Installation
Node.js is required to run this application, as well as a database (Postgres is assumed)
DB configuration is done via the config.js file at the root directory.

This application is comprised of two layers: the React front end and the Express middle teir.
This has been optimized to run on a Heroku platform. More on this later.

To deploy this app in a hot reloadable dev environment, you want to first stand up the express
middle ware by running npm run in the root directory. This will start up the middle application
on port:3000 by default

The next step would be to run the react frontend via: cd appui --> npm run. Accept the recommended
port: 3001
This will start up the UI on port 3001. Middleware calls are proxied to 3000. See appui/package.json

To deploy this app in a production environment, you want to first run 'npm run build' from the root 
directory. See /package.json --> scrpts: for more detail. This is package the ui application and run 
it along with the middlware all on port 3000.


# API Endpoints
These are the endpoints of the express application:

### Tourboat Operations
GET /tourboats/[ id ] - Returns the JSON for a boat object
GET /tourboats - Returns the JSON for all boat objects
POST /tourboats - Persists a new boat object via JSON payload
DELETE /tourboats/[ id ] - Removes a tourboat by ID

### Swimlane Operations
GET /swimlanes - Returns a JSON array of all Swimlane objects

### Tourboat / Swimlane Relationship Operations
GET /boatlanes - Returns a JSON array of all boat/lane assignments
POST /boatlanes/[boat ID]/[Lane ID] - Assigns a boat to a lane
DELETE /boatlanes/[boat ID] - Deletes the boat



