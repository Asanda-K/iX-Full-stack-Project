const Booking = require("../models/booking-model");

module.exports = class BookingService{
        constructor(){}
    
        create(newBooking){
            return new Promise((resolve,reject) => {
                Booking.create(newBooking, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    
        getAll(){
            return new Promise((resolve,reject) => {
                Booking.getAll((err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    
        getById(bookingId){
            return new Promise((resolve,reject) => {
                Booking.getById(bookingId, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res[0]);
                    }
                });
            });
        }
    
        updateBookingById(bookingId, booking){
            return new Promise((resolve,reject) => {
                Booking.updateBookingById(bookingId, booking, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res[0]);
                    }
                });
            });
        }
    }