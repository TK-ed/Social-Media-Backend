import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 20,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        min: 10,
    },
})

export const User = new mongoose.model("usersData", userSchema);