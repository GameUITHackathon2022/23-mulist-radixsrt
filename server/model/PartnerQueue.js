const mongoose = require('mongoose');
const { PartnerQueueStatusEnum } = require('../constants/Enum')
const Schema = mongoose.Schema;
const partner_queue = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true
        },
        status: {
            type: Number,
            enum: Object.values(PartnerQueueStatusEnum),
            default: PartnerQueueStatusEnum.pending //approved = 1, pending = 0, disapproved = -1
        },
    }, { timestamps: true }
);
module.exports = mongoose.model('PartnerQueue', partner_queue)