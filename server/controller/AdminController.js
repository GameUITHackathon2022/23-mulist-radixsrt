const mongoose = require('mongoose')
const User = require('../model/User.js');
const PartnerQueue = require('../model/PartnerQueue');
const { PartnerQueueStatusEnum, UserRoleEnum } = require('../constants/Enum');
class AdminController {

    async addNewPartner(req, res, next) {
        // Check cheater
        const userId = req.body.userId;
        const newPartner = await PartnerQueue.findOne({ user:  userId })
        if (!newPartner || newPartner.status == PartnerQueueStatusEnum.approved) {
            res.status(401)
            res.json({
                message: 'Invalid user to change into partner',
                inValid: true,
                success: false
            })
            return;
        }


        // udpate role in user table
        try {
            newPartner.status = 1;
            await newPartner.save();
            await User.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(userId) },
                { $set: { "role": UserRoleEnum.partner } }
            ).exec();

        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
        res.status(200)
        res.json({
            message: 'Sucessfully',
            success: true
        })
    }
    async deletePartner(req, res, next) {

        if (!req.body.userId) {
            res.status(400).json({
                error: 'Invalid partner to delete'
            });
            return;
        }
        // udpate role in user table
        try {
            await User.findOneAndUpdate(
                {
                    _id:  mongoose.Types.ObjectId(req.body.userId),
                    role: UserRoleEnum.partner
                },
                { role: UserRoleEnum.contributor }
            ).exec();
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Sucessfully',
        });
    }
}
module.exports = new AdminController;