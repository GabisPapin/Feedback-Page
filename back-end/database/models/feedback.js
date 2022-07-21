module.exports = (sequelize, DataTypes) => {
  const FeedbackTable = sequelize.define('Feedback', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING
  });

  return FeedbackTable;
};