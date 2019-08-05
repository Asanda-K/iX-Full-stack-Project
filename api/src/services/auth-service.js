const User = require("../models/user-model");

const role = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER:"user"
};

module.exports = class AuthService{
    constructor(){}

    async login(user){
        return new Promise ((resolve, reject) =>{
            User.getAll((err,dbUsers) => {
                if (err) reject(err);
                let dbUser = dbUsers.filter(dbUsers =>{
                    return dbUser.email === user.email;
                });
                if (dbUser.length){
                    if(dbUser[0].password != user.password){
                        reject("Incorrect password");
                    } else {
                        resolve(dbUser[0]);
                    }
                } else {
                    reject("User not found");
                }
            });
        });
    }
} 