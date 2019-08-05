const express = require('express');
const router = express.Router();

const Listing = require("../services/listing-service");

router.get("/", (req,res)=>{
    Listing.prototype
    .getAll(req.body)
    .then(listing =>{
        res.send(listing)
    })
    .catch(err =>{
        res.status(400).send(err);
    });
  });
  
router.post("/", (req,res)=>{
Listing.prototype
.create(req.body)
.then(listing =>{
    res.send(listing)
})
.catch(err =>{
    res.status(400).send(err);
});
});

module.exports = router;