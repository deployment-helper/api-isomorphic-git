import Joi, { ObjectSchema } from '@hapi/joi';

const userSchema:ObjectSchema = Joi.object({
    firstName:Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),
    lastName:Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),
    email:Joi.string()
    .email()
    .required(),
    password:Joi.string()
    .min(6)
    .max(16)
    .required()
});

const loginSchema:ObjectSchema = Joi.object({
    email:Joi.string()
    .email()
    .required(),
    password:Joi.string()
    .min(6)
    .max(16)
    .required()
})
export {
    userSchema,
    loginSchema
};