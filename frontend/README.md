# Todo App

This is a simple todo app that allows you to add and remove tasks.

## Get started


### Frontend

env file is required to run the app. Create a `.env` file in the root of the frontend directory and add the following:

```txt
API_URL=http://localhost:3000
```
if you are running the backend on a different port or address, change the `API_URL`.



1. Clone the repository
2. Run `npm install`, `pnpm install`, `yarn install` or `bun install` 
3. Run `npm start`, `pnpm start`, `yarn start` or `bun start` to start the app


### Backend

1. Clone the repository
2. Run `npm install`, `pnpm install`, `yarn install` or `bun install`

```bash
npx prisma migrate deploy
```

3. Run `npm run dev`, `pnpm run dev`, `yarn run dev` or `bun run dev` to start the app


## Docker

To run the app using docker, you need to have docker installed on your machine.
Make sure the docker daemon is running.

1. Clone the repository
2. Run `docker-compose up` in the root of the project
3. The app should be running on `http://localhost:3000`
4. To stop the app, run `docker-compose down`