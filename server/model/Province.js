const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const province = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        code: {
            type: Number,
            unique: true,
            required: true
        },
        name: {
            type: String,
            required: true
        },

    }
);
module.exports = mongoose.model('Province', province)