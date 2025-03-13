# User Profile Service

This is the user profile service for the social network application, designed to manage user-related operations such as creating, retrieving, updating, and deleting user profiles.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- TypeScript (installed globally)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the user-profile-service directory:

   ```
   cd social-network/user-profile-service
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

1. Set up your database connection in the `prisma/schema.prisma` file.
2. Run the following command to generate the Prisma client:

   ```
   npx prisma generate
   ```

3. Apply the migrations to your database:

   ```
   npx prisma migrate dev --name init
   ```

### Running the Service

To start the user profile service, run:

```
npm run start
```

The service will be available at `http://localhost:3000`.

## API Endpoints

### User Operations

- **Create User**: `POST /users`
- **Get User**: `GET /users/:id`
- **Update User**: `PUT /users/:id`
- **Delete User**: `DELETE /users/:id`

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.