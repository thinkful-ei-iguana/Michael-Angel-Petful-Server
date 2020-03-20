const express = require('express');
const CatsService = require('./cats-service');
const catsRouter = express.Router();


catsRouter
  .route('/')
  .get((req, res, next ) => {
    const cats = CatsService.getCats();
    res.json(cats);
  })
  .delete((req, res, next) => {
    let deletedCat = null;
    if(this.adoptionCallback) {
      deletedCat = this.adoptionCallback();
    }
    return res
      .status(200)
      .send(JSON.stringify(deletedCat));
  });

module.exports = catsRouter;