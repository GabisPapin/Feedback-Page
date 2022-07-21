const feedbackService = require('../service/feedbackService');

const createFeedback = async (req, res) => {
  try {
    const feedbackAuth = await feedbackService.authorization(req.body);

    if (feedbackAuth.code) {
      return res.status(feedbackAuth.code).json(feedbackAuth.message);
    }

    const newFeedback = await feedbackService.createFeedback(feedbackAuth);

    return res.status(201).json(newFeedback);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Page not found' });
  }
};

module.exports = {
  createFeedback,
};