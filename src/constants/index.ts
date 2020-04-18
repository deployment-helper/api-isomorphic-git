export enum Database {
  NAME = "user",
}

export enum BCRYPT {
  SALT_ROUNDS = 10,
}

export enum User {
  DEFAULT_SCOPE = "app.project.create",
  PROJECT_READ_PERMISSION_TEMPLATE = "project.`${obj.projectId}.read`",
  PROJECT_WRITE_PERMISSION_TEMPLATE = "project.`${obj.projectId}.write`",
  PROJECT_DELETE_PERMISSION_TEMPLATE = "project.`${obj.projectId}.delete`",
  PROJECT_MANAGE_USER_PERMISSION_TEMPLATE = "project.`${obj.projectId}.manageuser`",
}

export const ErrorMessages = {
  "401": {
    userDoesNotExist: "User does not exist",
  },
  "400": {
    badRequest: "Invalid request pyalod",
  },
};
