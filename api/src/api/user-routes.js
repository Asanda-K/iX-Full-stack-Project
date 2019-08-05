const express = require('express');
const router = express.Router();

const UserService = require("../services/user-service");

router.get("/", (req,res)=>{
  UserService.prototype
  .getAll(req.body)
  .then(user =>{
      res.send(user)
  })
  .catch(err =>{
      res.status(400).send(err);
  });
});

router.post("/", (req,res)=>{
  UserService.prototype
  .create(req.body)
  .then(user =>{
      res.send(user)
  })
  .catch(err =>{
      res.status(400).send(err);
  });
});

module.exports = router;

