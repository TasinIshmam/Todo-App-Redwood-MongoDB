# Super Simple Scaffold for MongoDB and Redwood

### Instructions

- Clone this project
- Run `yarn install`
- Create a `.env` file and define `DATABASE_URL` with a MongoDB connection string.
  - Instructions on creating a MongoDB instance using MongoDB Atlas: https://www.prisma.io/dataguide/mongodb/mongodb-atlas-setup
- Run `yarn rw prisma generate` to generate the Prisma Client
- Run `yarn rw dev` to start the app
