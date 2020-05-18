# User Management

User Management Backend service

## Local Development

- Run Mongodb db

Application using docker based mongodb instance. Mongodb command to run.

`docker compose up`

Mongodb configuration can be find in file `src/config/index.ts`

- Run Development Server

`npm run dev`

### Environment variables

Export `GOOGLE_APPLICATION_CREDENTIALS` environment variable

`export GOOGLE_APPLICATION_CREDENTIALS='<service-account-key-file>'`

Export `DATABASE_NAME` environment variable in monst of the case GCP project name
