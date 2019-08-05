const express = require('express');
const app = express();


// Body Paser Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("Dooby");
    console.log(req.body);
    next();
});


//Routes:
app.use("/api/users", require("./src/api/user-routes"));
app.use("/api/auth", require("./src/api/auth-routes"));
app.use("/api/provider", require("./src/api/provider-routes"));
app.use("/api/listing", require("./src/api/listing-routes"));
app.use("/api/booking", require("./src/api/booking-routes"));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)); 