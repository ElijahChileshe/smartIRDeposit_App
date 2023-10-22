const express = require("express")
require('dotenv').config()


// express app
const app = express()


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


// port
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000");
})