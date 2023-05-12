import User from "../../models/User.js"

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (err) {
        console.log(err);
    }
}