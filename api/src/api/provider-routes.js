const express = require('express');
const router = express.Router();

const Provider = require("../models/provider-model");

router.get("/", (req,res)=>{
    Provider.prototype
    .getAll(req.body)
    .then(provider =>{
        res.send(provider)
    })
    .catch(err =>{
        res.status(400).send(err);
    });
  });
  
router.post("/", (req,res)=>{
Provider.prototype
.create(req.body)
.then(provider =>{
    res.send(provider)
})
.catch(err =>{
    res.status(400).send(err);
});
});

module.exports = router;
