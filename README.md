# Library Management System

## Overview

This project is a simple Library Management System built using **ExpressJS** and **PostgreSQL**. It allows members to borrow and return books under certain conditions and provides APIs to manage books and members.

## Features

- **Member Management**: Add, update, delete, and list members.
- **Book Management**: Add, update, delete, and list books.
- **Borrowing System**:
  - Members can borrow books if they meet the borrowing conditions.
  - Members cannot borrow more than 2 books at a time.
  - Borrowed books cannot be borrowed by other members.
  - Penalized members are restricted from borrowing books.
- **Return System**:
  - Members can return books they have borrowed.
  - Late returns result in a penalty, restricting the member from borrowing for 3 days.

## Technologies

- **Backend**: ExpressJS
- **Database**: PostgreSQL
- **API Documentation**: Swagger
- **Testing**: Mocha, Chai (Unit Testing)
- **Design Pattern**: Domain-Driven Design (DDD)

## Project Setup

### Prerequisites

- **Node.js** (>= 14.x)
- **PostgreSQL** (>= 12.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gesarizky/backend-library-management.git
   cd library-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database.
   - Update the `.env` file with your database connection details.

   Example `.env` file:

   ```env
   DATABASE = 'library_management'
   DATABASE_USERNAME = 'your_username'
   DATABASE_PASSWORD = 'your_password'
   DATABASE_HOST = 'localhost'
   DATABASE_PORT = 5432
   DATABASE_TYPE = 'postgres'
   DATABASE_LOGGING = false
   ```

4. Run the database migrations:

   ```bash
   npm run migrate
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. The server will run on `http://localhost:3000`.

### Running Tests

To run unit tests:

```bash
npm test
```

### API Documentation

The API documentation is available via Swagger:

- Visit `http://localhost:3000/api-docs` to view the Swagger UI.

### Import Postman Collection

A Postman collection is provided for testing the API:

1. Open Postman.
2. Click `Import` and select the raw JSON file provided in the `postman_collection.json` file.
3. You can now use the collection to test the API endpoints.

## Project Structure

- **controllers/**: Contains route handling logic.
- **services/**: Contains business logic.
- **models/**: Defines the database models.
- **repositories/**: Handles data access logic.
- **routes/**: Defines API routes.
- **tests/**: Contains unit tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
