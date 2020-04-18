import Joi, { ObjectSchema } from "@hapi/joi";

const userSchema: ObjectSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(50).required(),
  lastName: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(16).required(),
});

const updateUserSchema: ObjectSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(50),
  lastName: Joi.string().alphanum().min(3).max(50),
  email: Joi.string().email(),
});

const loginSchema: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(16).required(),
});

const changePasswordSchema: ObjectSchema = Joi.object({
  oldPassword: Joi.string().min(6).max(16).required(),
  newPassword: Joi.string().min(6).max(16).required(),
});

export { userSchema, loginSchema, changePasswordSchema, updateUserSchema };
