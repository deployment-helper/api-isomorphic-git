export enum Database {
  NAME = "user",
}

export enum BCRYPT {
  SALT_ROUNDS = 10,
}

export enum User {
  DEFAULT_SCOPE = "app.project.create",
}

export const ErrorMessages = {
  "401": {
    userDoesNotExist: "User does not exist",
  },
  "400": {
    badRequest: "Invalid request pyalod",
  },
};
