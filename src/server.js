const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dogsRouter = require('./Dogs/dogs-router');
const catsRouter = require('./Cats/cats-router');
const adoptersRouter = require('./Adopters/adopters-router');
const { PORT, CLIENT_ORIGIN } = require('./config');


const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN 
}));

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));


app.use('/api/dogs', dogsRouter);
app.use('/api/cats', catsRouter);
app.use('/api/adopters', adoptersRouter);

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
  console.log(err);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});