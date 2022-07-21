const Joi = require('joi');
const model = require('../../database/models');

const authorization = (payload) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required()
  });

  const auth = schema.validate(payload);
  const { error, value } = auth;
  
  if (error) return { code: 400, message: { message: error.message} };

  return value;
};

const createFeedback = async ({
  name,
  email,
  message
}) => {
  const newPost = await model.Feedback.create({
    name,
    email,
    message
  });

  return newPost;
};

module.exports = {
  authorization,
  createFeedback,
};