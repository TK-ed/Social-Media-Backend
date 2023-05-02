import express from "express";
import { register } from "../controllers/auth/register.js";
import { getUsers } from "../controllers/users/users.js";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Routes Working...')
})

router.get('/get', getUsers)

router.post('/register', register)

export default router