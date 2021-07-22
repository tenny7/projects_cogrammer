const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register', Authcontroller.validate('Register'), AuthController.Register)
router.post('/login', AuthController.Login)
router.get('/user', AuthController.CurrentUser)

module.exports = router

