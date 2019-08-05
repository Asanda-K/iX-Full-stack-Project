const Listing = require("../models/listing-model");

module.exports = class ListingService{
    constructor(){}
    
        create(newListing){
            return new Promise((resolve,reject) => {
                Listing.create(newListing, (err, res) => {
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
                Listing.getAll((err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    
        getById(listingId){
            return new Promise((resolve,reject) => {
                Listing.getById(listingId, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res[0]);
                    }
                });
            });
        }
    
        updateListingById(listingId, listing){
            return new Promise((resolve,reject) => {
                Listing.updateListingById(listingId, listing, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res[0]);
                    }
                });
            });
        }
    }
