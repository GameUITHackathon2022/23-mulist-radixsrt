const District = require("../model/District");

class Address {

    async isValidAddress(province_code, district_code) {
        const isValid = await District.findOne({
            code: district_code,
            province_code: province_code
        })
        if (isValid) return true;
        return false;
    }
}
module.exports= new Address