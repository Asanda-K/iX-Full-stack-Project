const Provider = require("../models/provider-model");

module.exports = class ProviderService{
    constructor(){}

        create(newProvider){
            return new Promise((resolve,reject) => {
                Provider.create(newProvider, (err, res) => {
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
                Provider.getAll((err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    
        getById(providerId){
            return new Promise((resolve,reject) => {
                Provider.getById(providerId, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res[0]);
                    }
                });
            });
        }
    
        updateProviderById(providerId, provider){
            return new Promise((resolve,reject) => {
                Provider.updateProviderById(providerId, provider, (err, res) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(res[0]);
                    }
                });
            });
        }
    }
