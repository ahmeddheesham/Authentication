const express = require('express')
const userController = require('../controllers/user')


const router = express.Router()



router.post ('/api/register', userController.register )

router.post ('/api/login', userController.login )



module.exports = router