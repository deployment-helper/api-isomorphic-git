# User Management

[![Build Status](https://dev.azure.com/vinaymavi/Quiz%20Platfrom/_apis/build/status/user-management?branchName=develop)](https://dev.azure.com/vinaymavi/Quiz%20Platfrom/_build/latest?definitionId=1&branchName=develop)

User Management Backend service

## Local Development

<!-- TODO Architecure daigram required -->

- Run Mongodb db

Application using docker based mongodb instance. Mongodb command to run.

`docker compose up`

Mongodb configuration can be find in file `src/config/index.ts`

- Run Development Server

`npm run dev`

### Environment variables

Export `GOOGLE_APPLICATION_CREDENTIALS` environment variable

`export GOOGLE_APPLICATION_CREDENTIALS='<service-account-key-file>'`

Export `DATABASE_NAME` environment variable in monst of the casees it is similar to GCP project name.
