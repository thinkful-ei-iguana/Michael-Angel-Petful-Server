const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, CLIENT_ORIGIN } = require('./config');

const dogsRouter = require('../src/Dogs/dogs-router');
const catsRouter = require('../src/Cats/cats-router');
const adoptersRouter = require('../src/Adopters/adopters-router');

const app = express();

app.use(cors())

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));


app.use('/api/dogs', cors(), dogsRouter);
app.use('/api/cats', cors(), catsRouter);
app.use('/api/adopters', cors(), adoptersRouter);

app.get('/', (req, res)=> {
  res.send('Hello World');
});

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});