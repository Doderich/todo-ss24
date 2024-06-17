# Todo App

This is a simple todo app that allows you to add and remove tasks.



## Get started

If you want to start the project, just `docker compose up` in the root of the project 

```bash
docker compose up
```



### Frontend

If you want to run the app localy, an env file is required. Create a `.env` file in the root of the frontend directory and add the following:

```txt
API_URL=http://localhost:3000
```
if you are running the backend on a different port or address, change the `API_URL`.



1. Clone the repository
2. Run `npm install`, `pnpm install`, `yarn install` or `bun install` 
3. Run `npm start`, `pnpm start`, `yarn start` or `bun start` to start the app


### Backend

If you want to run the app locally, you'll need a local postgres db running on port 5432. You'll also need a .env file at /backend that needs to specify the `DATABASE_URL` variable.

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
2. Run `docker-compose up` in the root of the project (If you want to build the docker images yourself you can first use `docker-compose build`)
3. The app should be running on `http://localhost:3000`
4. To stop the app, run `docker-compose down`


Alternativly, you can build/run the containers seperatly:
### Frontend

1. Go into the frontend directory
2. Run Docker build
```bash
docker build -t todo-ss24-frontend .
```

3. Run Docker run

make sure to replace the API_URL with your address
```bash
docker run -d -p 3000:3000 -e API_URL='http://localhost:3001' todo-ss24-frontend
```

### Backend

1. Go into the backend directory
2. Run Docker build
```bash
docker build -t todo-ss24-backend .
```
3. Run Docker run
```bash
docker run -d -p 3001:3000 -e PORT=3000 todo-ss24-backend
```


### API Documentation
The documentation is defined in a [swagger.yaml](./backend/swagger.yaml)
