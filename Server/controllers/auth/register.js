import User from '../../models/User'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {

    const { name, email, password } = req.body

    const exist = await User.findOne({ email })
    if(exist){
        return res.status(400).json({ error: 'User already exists' })
    }
    const hashedPassword = bcrypt.hashSync(password)

    try {
        const user = User({
            name,
            email,
            password: hashedPassword,
        })
        await user.save()
    } catch (err) {
        res.send(err)
    }

}