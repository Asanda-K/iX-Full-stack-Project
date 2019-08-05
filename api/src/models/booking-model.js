var mysqlConn = require("../database/database");

var Booking = (booking) =>{
    this.id;
    this.dateFrom = booking.dateFrom;
    this.dateTo = booking.dateTo;
    this.status = booking.status;
    this.userId = booking.userId;
    this.listingId = booking.listingId;
};

Booking.create = (newBooking, result) => {
    mysqlConn.query("INSERT INTO booking ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Booking.getAll = (result) => {
    mysqlConn.query("Select * from booking", (err, res) =>{
        if (err){
            console.log("error:", err);
            result(err,null);
        } else {
            console.log("Booking : ", res);
            result(null,res);
        }
    });
};

Booking.getById = (bookingId, result) =>{
    mysqlConn.query("Select * from booking where id = ? ", bookingId, (err, res) =>{
        if (err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null,res);
        }
    }); 
};

Booking.updateById = (bookingId, booking, result) => {
    mysqlConn.query(
      "UPDATE booking SET booking = ? WHERE id = ?",
      [booking, bookingId],
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

  Booking.removeBooking = (bookingId, result) => {
    mysqlConn.query("DELETE FROM booking WHERE id = ?", bookingId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };


module.exports = Booking;