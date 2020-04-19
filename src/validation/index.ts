import Joi, { ObjectSchema } from "@hapi/joi";

const reqAddUserSchema: ObjectSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(50).required(),
  lastName: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(16).required(),
});

const reqUpdateUserSchema: ObjectSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(50),
  lastName: Joi.string().alphanum().min(3).max(50),
  email: Joi.string().email(),
});

const regLoginSchema: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(16).required(),
});

const reqChangePasswordSchema: ObjectSchema = Joi.object({
  oldPassword: Joi.string().min(6).max(16).required(),
  newPassword: Joi.string().min(6).max(16).required(),
});

export {
  reqAddUserSchema,
  regLoginSchema,
  reqChangePasswordSchema,
  reqUpdateUserSchema,
};
