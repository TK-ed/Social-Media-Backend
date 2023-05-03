import express from "express";
import { register } from "../controllers/auth/register.js";
import { getUsers } from "../controllers/auth/users.js";
import { login } from "../controllers/auth/login.js";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Routes Working...')
})

// get routes
router.get('/get', getUsers)

// post routes
router.post('/register', register)
router.post('/login', login)

export default router