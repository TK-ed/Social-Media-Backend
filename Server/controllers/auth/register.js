import User from '../../models/User.js'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {

    const { name, email, password } = req.body

    const exist = await User.findOne({ email })
    if(exist){
        return res.status(400).json({ error: 'User already exists' })
    }
    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password, salt)

    try {
        const createUser = User({
            name,
            email,
            password: hashedPassword,
        })
        await user.save()
        res.status(200).send(createUser)
    } catch (err) {
        res.send(err)
    }

}