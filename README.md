# Social Network Project

This project is a social network application inspired by Instagram, built using Node.js, Express.js, and Prisma ORM with TypeScript. It follows a microservices architecture, consisting of two main services: `user-profile-service` and `posts-service`.

## Architecture

The application is divided into two microservices:

1. **User Profile Service**: 
   - Manages user-related operations such as creating, updating, and deleting user profiles.
   - Exposes RESTful APIs for user management.

2. **Posts Service**: 
   - Handles post-related functionalities including creating, updating, and deleting posts.
   - Provides RESTful APIs for post management.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- TypeScript
- Prisma CLI

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd social-network
   ```

2. Install dependencies for each service:

   For User Profile Service:
   ```
   cd user-profile-service
   npm install
   ```

   For Posts Service:
   ```
   cd posts-service
   npm install
   ```

### Running the Services

To run each service, navigate to the respective service directory and use the following command:

For User Profile Service:
```
npm run start
```

For Posts Service:
```
npm run start
```

### API Documentation

- **User Profile Service**: Refer to the `user-profile-service/README.md` for detailed API endpoints and usage.
- **Posts Service**: Refer to the `posts-service/README.md` for detailed API endpoints and usage.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.