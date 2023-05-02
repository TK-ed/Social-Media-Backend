import express from 'express';
import User from '../../models/User.js';

export const getUsers = async (req, res, next) => {
    const users = []
    try {
        users = await User.find()
    } catch (err) {
        return res.send(err)
    }
}