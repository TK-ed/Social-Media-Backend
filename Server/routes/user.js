import express from "express";
import { register } from "../controllers/auth/register.js";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Routes Working...')
})

router.post('/register', register)

export default router