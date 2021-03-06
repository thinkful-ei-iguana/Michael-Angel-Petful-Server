const express = require('express');
const CatsService = require('./cats-service');
const catsRouter = express.Router();
const jsonBodyParser = express.json();


catsRouter
  .route('/')
  .get((req, res, next ) => {
    const cats = CatsService.getCats();
    res.json(cats);
  })
  .delete((req, res, next) => {
    res.status(200).send(CatsService.adoptCat());
  });

module.exports = catsRouter;