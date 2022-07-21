const express = require('express');
const feedbackController = require('../controller/feedbackController');

const feedbackRouter = express.Router();

feedbackRouter.post('/', feedbackController.createFeedback);

module.exports = feedbackRouter;