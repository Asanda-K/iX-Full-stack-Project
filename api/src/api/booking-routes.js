const express = require('express');
const router = express.Router();

const BookingService = require("../services/booking-service");

router.get("/", (req,res)=>{
    BookingService.prototype
    .getAll(req.body)
    .then(booking =>{
        res.send(booking)
    })
    .catch(err =>{
        res.status(400).send(err);
    });
  });

router.post("/", (req,res)=>{
BookingService.prototype
.create(req.body)
.then(booking =>{
    res.send(booking)
})
.catch(err =>{
    res.status(400).send(err);
});
});

module.exports = router;