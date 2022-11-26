const { json } = require("body-parser");
const Bill = require("../model/Bill")
const Campaign = require("../model/Campaign");
const PartnerQueue = require('../model/PartnerQueue');
const { UserRoleEnum, CategoriesRubbish } = require('../constants/Enum')
const mongoose = require('mongoose')
const ContributorController = {


    //createBill
    createBill: async (req, res) => {
        try {
            const rubbish = [];
            Object.keys(CategoriesRubbish).forEach(key => {
                rubbish.push({
                    category: key,
                    weight: 0
                })
            })

            req.body.rubbish.forEach(element => {
                rubbish.forEach((ele2, index) => {
                    if (ele2.category == element.category) {
                        if (!element.weight) element.weight = 0
                        rubbish[index] =
                        {
                            category: element.category,
                            weight: element.weight
                        }
                    }

                })
            });
            console.log(rubbish)
            const bill = await Bill({
                rubbish: rubbish,
                campaignId: req.body.campaignId,
                userId: req.user.userId
            });
            const campaign = await Campaign.findById(req.body.campaignId);
            console.log(req.body)
            if (!campaign) {
                res.status(401).json({
                    success: false,
                    invalidFields: true,
                })
                return;
            }
            if (Date.now() > campaign.end) {
                campaign.status = false;
                await campaign.save();
            }
            if (!campaign.status) {
                res.status(401).json({
                    success: false,
                    closedCampaign: true,
                    message: 'Campaign has closed'
                })
                return;
            }
            const saveBill = await bill.save();
            console.log(saveBill);
            res.status(200).json({
                success: true,
                bill: saveBill,
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }

    },

    requestPartnerRole: async (req, res, next) => {
        if (req.user.role == UserRoleEnum.contributor) {
            const newPartnerQueue = new PartnerQueue({
                user: new mongoose.Types.ObjectId(req.user.userId)
            })
            try {
                await newPartnerQueue.save();
            } catch (e) {
                res.status(500).json({
                    success: false,
                    error: e
                })
                console.log(e);
                return;

            }

            res.status(200).json({
                success: true,
                message: 'Sucessfully'
            })
            return;
        }

        res.status(401).json({
            success: false,
            invalidUser: true,
            message: 'Invalid user.'
        })
    },

    //viewMyBill
    viewMyBill: async (req, res) => {
        try {
            const myBill = await Bill.find({ userId: req.user.userId }).all();
            res.status(200).json({
                success: true,
                bills: myBill
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}

module.exports = ContributorController;