const express = require("express")
const router = express.Router()
// registration
const {signupUser, login} = require("../../controllers/registrationController");

router.post("/register", signupUser)

router.post("/login", login)

module.exports = router;