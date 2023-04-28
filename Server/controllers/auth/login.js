import { User } from '../../models/userModel';
import bcrypt from 'bcrypt'

export const login = async (req, res) => {

    const { username, password } = req.body
    const exists = User.findOne({username: username})

    if(exists) {
        try {
            
            // login
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)

            // checking
            const check = bcrypt.compare(User.findOne(password), hash)
        } catch (err) {
            res.send(err)
        }
    }
};
