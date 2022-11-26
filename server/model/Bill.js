const mongoose = require('mongoose')
const { BillStatusEnum, CategoriesRubbish } = require('../constants/Enum')

const billSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campaign"
    },

    rubbish: [{
        category: {
            type: String,
            enum: Object.keys(CategoriesRubbish)
        },
        weight: {
            type: Number
        },
    }],

    status: {
        type: Number,
        enum: Object.values(BillStatusEnum),
        default: BillStatusEnum.pending
    },

});

module.exports = mongoose.model("Bill", billSchema);