var mysqlConn = require("../database/database");


var Provider = (provider) =>{
    this.id;
    this.name = provider.name;
    this.email = provider.email;
    this.password = provider.password;
    this.address = provider.address;
};


Provider.create = (newProvider, result) => {
    mysqlConn.query("INSERT INTO provider set ?", newProvider, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

Provider.getAll = (result) => {
    mysqlConn.query("Select * from provider", (err, res) =>{
        if (err){
            console.log("error:", err);
            result(err,null);
        } else {
            console.log("Provider : ", res);
            result(null,res);
        }
    });
};

Provider.getById = (providerId, result) =>{
    mysqlConn.query("Select * from provider where id = ? ", providerId, (err, res) =>{
        if (err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null,res);
        }
    }); 
};


Provider.updateById = (providerId, provider, result) => {
    mysqlConn.query(
      "UPDATE user SET provider = ? WHERE id = ?",
      [provider, providerId],
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


  Provider.removeProvider = (providerId, result) => {
    mysqlConn.query("DELETE FROM provider WHERE id = ?", providerId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

module.exports = Provider;

