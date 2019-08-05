const User = require("../models/user-model");

module.exports = class UserService{
    constructor(){}

    create(newUser){
        return new Promise((resolve,reject) => {
            User.create(newUser, (err, res) => {
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
            User.getAll((err, res) => {
                if (err){
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getById(userId){
        return new Promise((resolve,reject) => {
            User.getById(userId, (err, res) => {
                if (err){
                    reject(err);
                } else {
                    resolve(res[0]);
                }
            });
        });
    }

    updateUserById(userId, user){
        return new Promise((resolve,reject) => {
            User.updateUserById(userId, user, (err, res) => {
                if (err){
                    reject(err);
                } else {
                    resolve(res[0]);
                }
            });
        });
    }
}