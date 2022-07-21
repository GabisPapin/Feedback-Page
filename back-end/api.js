require('dotenv').config();
const express = require('express');
const feedbackRouter = require('./src/route/feedbackRoute');

const port = process.env.API_PORT;
const app = express();

app.use(express.json());

app.use('/feedback', feedbackRouter);

app.get('/', (_req, res) => {
  res.send();
});

app.listen(port, () => console.log(`listening port ${ port }`));