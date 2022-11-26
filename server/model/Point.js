const mongoose = require('mongoose')

const PointsChema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true
    },
    value: {
        type: Number
    },
    plastic:{
        type:Number
    },
    paper:{
        type:Number
    },
    cloth:{
        type:Number
    }


});

module.exports = mongoose.model("Point", PointsChema);