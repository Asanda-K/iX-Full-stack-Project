var mysqlConn = require("../database/database");


var Listing = (listing) =>{
    this.id;
    this.name = listing.name;
    this.address = listing.surname;
    this.imageUrl = listing.imageUrl;
    this.price = listing.price;
};

Listing.create = (newListing, result) => {
    mysqlConn.query("INSERT INTO listing set ?", newListing, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

Listing.getAll = (result) => {
    mysqlConn.query("Select * from listing", (err, res) =>{
        if (err){
            console.log("error:", err);
            result(err,null);
        } else {
            console.log("Listing : ", res);
            result(null,res);
        }
    });
};

Listing.getById = (listingId, result) =>{
    mysqlConn.query("Select * from listing where id = ? ", listingId, (err, res) =>{
        if (err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null,res);
        }
    }); 
};


Listing.updateById = (listingId, listing, result) => {
    mysqlConn.query(
      "UPDATE user SET listing = ? WHERE id = ?",
      [listing, listingId],
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


  Listing.removeListing = (listingId, result) => {
    mysqlConn.query("DELETE FROM listing WHERE id = ?", listingId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

module.exports = Listing;