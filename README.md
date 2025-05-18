# SimpleDddCrudApi using Expressjs
This is a simple CRUD(Create, Read, Update, Delete) RESTful API developed in express.js using Domain Driven Design methodology.

## operating a Simple DDD CRUD API
Applying Domain-Driven Design (DDD) software development methodology to write a simple CRUD API, and save the data to cloud firestore using express.js.

### Setup Instructions
Here is how to test the API and get confirmation that your API calls are working and giving you the desired feedback.

- Clone the repository
     - git clone [the DddCrudApi repo](https://github.com/Zaratti/DddCrudApi.git)
     - then use _cd DddCrudApi_ to get into the folder.

- Set up the VScode IDE(or any other integrated development environment you use) environment
     - Creating the Firebase Project.
     - Enabling Cloud Firestore.
     - Generate the Service Account Key: Remember when you download a JSON file. Rename it to serviceAccountKey.json and add it to your .gitignore file.

- Run the index App
     - After setting up the environment, run the index app: node index.js in any IDE(I used VS Code) terminal.
     -  This will create an address at http://127.0.0.1:3000 or any other generated address in your browser, which you will use in POSTman to interact with Cloud Firestore/Firebase.
     -  Navigate to your POSTman, you can test the different API endpoints in your POSTman and confirm succesful results in your database.