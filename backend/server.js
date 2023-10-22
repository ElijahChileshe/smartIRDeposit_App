const express = require("express");
require('dotenv').config();
const user = require("./routes/user/user");
const registration =  require("./routes/registration/registration")
const mongoose = require("mongoose")

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use(express.json())



// routes
app.use(user);
app.use(registration);


// Database setup
mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true,
useNewUrlParser: true,
// useCreateIndex: true,
useUnifiedTopology: true,
    }).then(()=> {
    console.log("Successfully Connected to Cloud Database")
}).catch((err) =>{
    console.log(err);
});



// port
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000");
})