const express = require("express")
const router = express.Router()

// registration
router.get('/register', (req, res) => {
    res.json({mssg: "Registration"})
})


// login
router.get('/login', (req, res) => {
    res.json({mssg: "login"})
})


module.exports = router;