import express from "express"
import {signup} from '../controllers/auth/signup.js'
const router = express.Router()

// routes test
router.get('/', (req, res) => {
    res.send('Routes tested!!!')
})

// routes
// router.get('/login', loginUser)

router.post('/signup', signup)

export default router