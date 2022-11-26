const partnerController = require("../controller/PartnerController");
const router = require("express").Router();
const authMiddleware = require('../middleware/AuthMiddleware')




router.use(authMiddleware.isPartner)

//create
router.post("/create-campaign", partnerController.createCampaign);
router.get('/view-campaign-bills', partnerController.viewwCampaignBills);
router.put('/accept-bill', partnerController.acceptBill);
router.put('/deny-bill', partnerController.dennyBill);
router.get('/view-my-campaigns', partnerController.viewMyCampaign);


// //get all coffee
// router.get("/", coffeeController.getAllCoffee);
module.exports = router;