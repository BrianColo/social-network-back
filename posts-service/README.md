# Posts Service

This is the posts service for the social network application, designed to handle all functionalities related to user posts, similar to features found in Instagram.

## Features

- Create, read, update, and delete posts.
- Manage post-related data and interactions.
- Integrates with the user profile service for user-related operations.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A PostgreSQL database (or any other supported database)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the posts service directory:

   ```
   cd social-network/posts-service
   ```

3. Install the dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

### Configuration

1. Set up your database connection in the `prisma/schema.prisma` file.
2. Run the Prisma migrations to set up your database schema:

   ```
   npx prisma migrate dev --name init
   ```

### Running the Service

To start the posts service, run:

```
npm run start
```

or

```
yarn start
```

### API Endpoints

- `POST /posts` - Create a new post
- `GET /posts/:id` - Retrieve a post by ID
- `PUT /posts/:id` - Update a post by ID
- `DELETE /posts/:id` - Delete a post by ID

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bugs.

### License

This project is licensed under the MIT License. See the LICENSE file for details.