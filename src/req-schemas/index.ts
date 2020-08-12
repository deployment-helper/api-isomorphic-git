import Joi, { ObjectSchema } from "@hapi/joi";

const crateVersionSchema: ObjectSchema = Joi.object({
  username: Joi.string().max(50).required(),
  accesstoken: Joi.string().min(10).max(250).required(),
  repourl: Joi.string().min(5).max(250).required(),
  projectId: Joi.string().min(5).max(250).required(),
  version: Joi.string().min(1).max(5).required(),
  content: Joi.string().min(10).max(5000).required(),
});

const getVersionSchema: ObjectSchema = Joi.object({
  username: Joi.string().max(50).required(),
  accesstoken: Joi.string().min(10).max(250).required(),
  repourl: Joi.string().min(5).max(250).required(),
  projectId: Joi.string().min(5).max(250).required(),
  version: Joi.string().min(1).max(5).required(),
});

export { crateVersionSchema, getVersionSchema };
