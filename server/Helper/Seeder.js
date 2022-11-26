const https = require('https');
const Province = require('../model/Province')
const District = require('../model/District')
const Seeder={
     async seedProvincesandDistricts(){

        await https.get('https://provinces.open-api.vn/api/?depth=2', (resp) => {
            let data = '';
            resp.setEncoding('utf8');
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
            
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                let provinceToInsert =[]; 
                let districtToInsert =[];
                data= JSON.parse(data) 
                data.forEach(province => {
                    provinceToInsert.push({
                        code:province.code,
                        name:province.name,
                    })
                    province.districts.forEach(district => {
                        districtToInsert.push({
                            code:district.code,
                            name:district.name,
                            province_code:province.code,
                        })
                    });
                });
                Province.insertMany(provinceToInsert)
                District.insertMany(districtToInsert)
            });
          
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });  
    }
}
module.exports=Seeder