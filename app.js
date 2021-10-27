/* eslint-disable object-curly-spacing */
const express = require('express');
const app = express();
const port = process.env.PORT ?? 4000;
const mainRouter = require('./routes/main.router');
const registrationRouter = require('./routes/registration.router');
const loginRouter = require('./routes/login.router');

// use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set
app.set('view engine', 'hbs');

// routes
app.use('/', mainRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);

const serverStart = async () => {
  try {
    app.listen(port, () => console.log(`***Server started at ${port} port***`));
  } catch (error) {
    console.log(error.message);
  }
};

serverStart();
