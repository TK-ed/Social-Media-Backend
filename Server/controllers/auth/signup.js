import { User } from '../../models/userModel.js'
import bcrypt from 'bcrypt'

// signup   
export const signup = async (req, res) => {
    const {username, password} = req.body

    const exists = await User.findOne({username: username})
    if(exists) {
        res.send('Already account exists!!')
    }

    else {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        res.send(hash)
    }
}

