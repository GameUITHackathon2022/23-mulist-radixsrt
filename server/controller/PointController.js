const mongoose = require("mongoose");
const { PointOfRubbish } = require("../constants/PointConverter");
const Bill = require("../model/Bill");
const Point = require("../model/Point");

class PointController {
    async updateUserPoint(userId) {
        const bills = await Bill.find({ userId: userId });
        var pointValue = 0;
        console.log(bills)
        let plastic = 0, paper = 0, cloth = 0;
        bills.forEach(bill => {
            bill.rubbish.forEach(ele => {
                if (ele.category == 'plastic') plastic += ele.weight;
                if (ele.category == 'paper') paper += ele.weight;
                if (ele.category == 'cloth') cloth += ele.weight;
                pointValue += ele.weight * PointOfRubbish[ele.category]
            })
        })
        const newPoint = new Point({
            userId: mongoose.Types.ObjectId(userId),
            value: pointValue,
            plastic: plastic,
            paper: paper,
            cloth: cloth
        })
        await newPoint.save()
        return newPoint
    }
    async getTop8HiestPoint(){
        const data = await Point.find().sort({value:-1}).limit(8).populate('userId').exec()
        return data;
    }
}
module.exports = new PointController