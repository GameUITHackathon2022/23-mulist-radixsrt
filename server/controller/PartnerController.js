const Campaign = require("../model/Campaign");
const { BillStatusEnum, CategoriesRubbish } = require("../constants/Enum");
const Bill = require("../model/Bill");
const Address = require("../Helper/Address");
const PointController = require("./PointController");

const PartnerController = {

    //create campaign
    createCampaign: async (req, res, next) => {
        // const currentUserId = req.user.userId;
        // const title = req.body.title;
        // const desc = req.body.desc;
        // const begin = req.body.bigin;
        // const end = req.body.end;
        // const address = req.body.address;
        // const address2 = req.body.address2;
        // const status = req.body.status;
        // const weight_limit = req.body.weight_limit;
        try {
            //Validate input
            if (new Date(req.body.begin) <= Date.now() || new Date(req.body.begin) >= new Date(req.body.end)) {
                res.status(400).json({
                    success: false,
                    invalidDates: true
                });
                return;
            }
            const isValidAdd = await Address.isValidAddress(req.body.address, req.body.address2)
            if (req.body.weight_limit <= 0 || !isValidAdd) {
                next({ err: 'Invalid fields' })
                return;
            }

            let newCampaign = Campaign({ ...req.body, userId: req.user.userId });
            console.log(newCampaign)
            const saveCampaign = await newCampaign.save();

            res.status(200).json({
                success: true,
                campaign: saveCampaign
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }

    },

    //view bills of campaign
    viewwCampaignBills: async (req, res) => {
        try {
            const campaignId = req.body.campaignId;
            const CampaignBills = await Bill.find({ campaignId: campaignId }).all();
            res.status(200).json({
                success: true,
                bills: CampaignBills
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    },

    //accept BILL
    acceptBill: async (req, res) => {
        try {

            const billId = req.body.billId;

            const bill = await Bill.findById(billId)
            const campaign = await Campaign.findById(bill.campaignId)
            // console.log(campaign, "  ", bill._id)

            // if campaign has ended
            if (campaign.status == false) {
                res.status(400).json({
                    success: false,
                    isClosedCampaign: true
                })
                return;
            }

            // if campaign not belongs to this partner
            if (campaign.userId == req.user.userId || bill.status != BillStatusEnum.pending) {
                bill.status = BillStatusEnum.success;

                //calculate total rubbish weight of user
                let totalWeight = 0;

                bill.rubbish.forEach(element => {
                    totalWeight += element.weight;
                });

                
                if ( campaign.status==false) {
                    res.status(400).json({
                        success: false,
                        closedCampaign: true,
                    })
                    return;
                };
                // increase total collected weight
                campaign.collected_weight += totalWeight

                // if weight excess
                if (campaign.collected_weight >= campaign.weight_limit)
                    campaign.status = false;
                await campaign.save();
                await bill.save();
                res.status(200).json({
                    success: true,
                    bill: bill
                })
                PointController.updateUserPoint(bill.userId)
                return;
            }
            // res.status(400).json({
            //     success: false,
            //     mess: 'dont do that'
            // })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    },

    dennyBill: async (req, res) => {
        try {

            const billId = req.body.billId;
            const bill = await Bill.findById(billId)
            const campaign = await Campaign.findById(bill.campaignId)
            if (!campaign || bill.status != BillStatusEnum.pending) return;
            bill.status = BillStatusEnum.fail;
            await bill.save()
            res.status(200).json({
                success: true,
                bill:bill
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    },

    viewMyCampaign: async (req, res) => {
        try {
            const campaigns = await Campaign.find({ userId: req.user.userId });
            res.status(200).json({
                success: true,
                campaigns: campaigns
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    }




}

module.exports = PartnerController;