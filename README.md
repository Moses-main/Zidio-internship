# Location Tracker App

## Introduction

This is a simple location tracker application built with Node.js, Express, and MongoDB. It allows users to register, login, and track their locations.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js: [Download](https://nodejs.org/)
- MongoDB: [Download](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/Moses-main/Zidio-internship.git
   ```
2. Navigate to the project directory:
   ```
   cd zidio_internship
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up your MongoDB database:
   - Make sure MongoDB is running on your machine.
   - Create a new database named `location_tracker`.
   - Configure the MongoDB connection URI in `app.js` file.
5. Start the application:
   - For development mode (with nodemon):
     ```
     npm run dev
     ```
   - For production mode:
     ```
     node app
     ```
6. The application should now be running locally. Access it in your browser at `http://localhost:3500`.

## Usage

- Register a new user by sending a POST request to `/users` with name and email in the request body.
- Log in with an existing user by sending a POST request to `/login` with email and password in the request body.
- Use the provided API endpoints to manage users and their locations.

<!-- ## API Documentation

For API documentation, refer to the `routes.js` file in the project directory. -->

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---
