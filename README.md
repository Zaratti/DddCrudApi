# AtopWebTechnologies_Zaratti-simpleDddCrudApi
This is a Simple CRUD(Create, Read, Update, Delete) API using Domain Driven Design methodology.

## operating a Simple DDD CRUD API
using Domain-Driven Design (DDD) software development methodology to write a simple CRUD API, and save the data to cloud firestore using express.js.

### Setup Instructions
Here is how to test the model and get inferences for your handwritten texts.

- Clone the repository
     - git clone [the simpleDddCrudApi repo](https://github.com/atopwebtechnologies/simpleDddCrudApi.git)
     - then use _cd simpleDddCrudApi_ to get into the folder.

- Set up the VScode IDE(or any other integrated development environment you use) environment
     - Creating the Firebase Project.
     - Enabling Cloud Firestore.
     - Generate the Service Account Key: Remember when you download a JSON file. Rename it to serviceAccountKey.json and add it to your .gitignore file.

- Run the index App
     - After setting up the environment, run the index app: node index.js in any IDE(I used VS Code) terminal.
     -  This will create an address at http://127.0.0.1:3000 in your browser, which you will use in POSTman to interact with Cloud Firestore.
     -  Navigate to your POSTman, you can test the different API endpoints in your POSTman and confirm succesful results in your database.