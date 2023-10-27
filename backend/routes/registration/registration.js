const express = require("express")
const router = express.Router()
// registration
const signupUser = require("../../controllers/registrationController");

router.post("/register", signupUser)

module.exports = router;