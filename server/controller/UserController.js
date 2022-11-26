const mongoose = require('mongoose')
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Campaign = require("../model/Campaign");
const PointController = require('./PointController.js');
class UserController {

    //viewALLCampaign
    async viewAllCampaign(req, res, next) {
        try {
            const campaigns = await Campaign.find();
            res.status(200).json(
                {
                    success: true,
                    campaigns: campaigns
                }
            )
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    }

    async creatNewAccount(req, res, next) {
        // Check cheater
        if (!req.body.email || !req.body.password || !req.body.address || !req.body.phone || !req.body.address2 || !req.body.name) {
            console.log(req.body)
            next({
                invalidFields: true,
                message: "Invalid fields"
            })
            return;
        }
        let hashedPassword
        try {
            let saltRounds = 10;
            hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        } catch (e) {
            console.log(e)
        }
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
            address2: req.body.address2,
            address: req.body.address,
            phone: req.body.phone,
            // role: req.body.role,
        })

        console.log(newUser);
        try {
            await newUser.save();
        } catch (err) {
            next({
                success: false,
                isDuplicated: true,
                message: "Email has existed",
                error: err,
            });
            return;
        }
        res.send({
            success: true,
            message: "sucessfully",
            user: newUser
        });
    }

    async verifyAccount(req, res, next) {
        if (!req.body.email || !req.body.password) {
            next({
                success: false,
                message: "Invalid fields",
                invalidFields: true
            })
            return;
        }
        const user = await User.findOne({ email: req.body.email })

        console.log(user);
        if (user) {
            try {
                let check = await bcrypt.compare(req.body.password, user.password)
                if (check) {
                    const token = jwt.sign({
                        user: {
                            email: user.email,
                            userId: user._id,
                            address2: user.address2,
                            address: user.address,
                            role: user.role
                        },
                    },
                        process.env.SECRET_KEY_TOKEN,
                        {
                            expiresIn: "80h"
                        }
                    );
                    res.cookie('token', token, {
                        expires: new Date(Date.now() + 80 * 3600)
                    })
                    res.send({
                        success: true,
                        message: "sucessfully",
                        user: user
                    })
                }
                else {
                    res.send({
                        success: false,
                        message: "wrong information",
                        wrongInformation: true,
                    });
                    return;
                }
            } catch (err) {
                next(err);
                return;
            }
        }
        else {
            res.send({ success: false, message: "Wrong information" });
            return;
        }
    }
    async getTop8Point(req, res, next) {
        try {
            const data = await PointController.getTop8HiestPoint();
            res.status(200).json({
                success: true,
                data: data
            })
        }catch(e){
            res.status(400).json({
                success: false,
                err: e
            })
        }
    }


}
module.exports = new UserController;