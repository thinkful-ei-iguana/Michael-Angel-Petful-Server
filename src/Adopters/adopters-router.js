const express = require('express');
const AdoptersService = require('./adopters-service');

const adoptersRouter = express.Router();

adoptersRouter
  .route('/')
  .get((req, res) => {
    const adopters = AdoptersService.getAdopters();
    res.json(adopters);
  })
  .post((req, res)=> {
    const {name} = req.body;
    const newName = {name};

    const newList = AdoptersService.addName(newName);
    res.json(newList);
  })
  .delete((req, res) => {
    res.status(200).send(AdoptersService.adopt());
  });

module.exports = adoptersRouter;