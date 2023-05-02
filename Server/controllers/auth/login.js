import User from "../../models/User.js"
import bcrypt from 'bcrypt'

export const login = async (req, res) => {

    const { email, password } = req.body

    try {

        // validate email
        const user = await User.findOne({email: email})

        if(!user) res.status(404).send('User not found')

        if(user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if(isMatch) res.status(200).send(user, isMatch)
        }
        
    } catch (err) {
        res.status(500).send(err)
    }

}