const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const district = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        code: {
            type: Number,
            unique: true,
            required: true
        },
        province_code: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },

    }
);
module.exports = mongoose.model('District', district)