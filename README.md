# Todo app demo with MongoDB and Redwood

This is a demo todo app to show how easy it is to get started with Redwood and MongoDB. The app was shown as a demo during RedwoodJS 1.0 Meetup, held in April 2022.

- [Video of the presentation](https://www.youtube.com/watch?v=up96XkgFFGc&t=4675s)
- [Skip to the demo](https://youtu.be/up96XkgFFGc?t=5024)

### Instructions

- Clone this project
- Run `yarn install`
- Create a `.env` file and define a `DATABASE_URL` environment variable with a MongoDB connection string.
  - You can use `.env.example` as a reference.
- Run `yarn rw prisma generate` to generate the Prisma Client
- Run `yarn rw dev` to start the app


### Additional Resources

- Instructions on signing up and creating a free MongoDB cluster using MongoDB Atlas [is available here](https://youtu.be/xrc7dIO_tXk), just follow the steps up to creating a database cluster. Further instructions for grabbing the connection string are shown during the demo at [1:27:33](https://www.youtube.com/watch?v=up96XkgFFGc&t=5253s)

- [Get started with MongoDB and Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb)
