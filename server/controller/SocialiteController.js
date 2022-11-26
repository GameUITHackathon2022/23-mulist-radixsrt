const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const mongoose = require('mongoose')
const User = require('../model/User.js');

class SocialiteController {
    async verifyGoogleLogin(req, res, next) {
        const { token } = req.body
        try {
            var ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID
            });
        } catch (error) {
            res.status(401)
            res.json({
                message: error,
                success: false
            })
            return
        }

        const { name, email } = ticket.getPayload();
        try {
             await User.findOneAndUpdate(
                { user_name: email },
                { $set: { "name": name} },
                { upsert: true, new: true },  //upsert to create a new doc if none exists and new to return the new, updated document instead of the old one. 
            ).exec();
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
            return;
        }
        res.status(200).json({ success: true, data: ticket.getPayload() })
    }
}
module.exports = new AuthController;