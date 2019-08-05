var mysqlConn = require("../database/database");


var User = (user) =>{
    this.id;
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
};

User.create = (newUser, result) => {
    mysqlConn.query("INSERT INTO user ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.getAll = (result) => {
    mysqlConn.query("Select * from user", (err, res) =>{
        if (err){
            console.log("error:", err);
            result(err,null);
        } else {
            console.log("User : ", res);
            result(null,res);
        }
    });
};

User.getById = (userId, result) =>{
    mysqlConn.query("Select * from user where id = ? ", userId, (err, res) =>{
        if (err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null,res);
        }
    }); 
};

User.updateUserById = (userId, user, result) => {
    mysqlConn.query(
      "UPDATE user SET user = ? WHERE id = ?",
      [user, userId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  };

  User.removeUser = (userId, result) => {
    mysqlConn.query("DELETE FROM user WHERE id = ?", userId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };


module.exports = User;

