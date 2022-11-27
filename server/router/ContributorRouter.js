const router=require('express').Router();
const ContributorController = require('../controller/ContributorController');
const PointController = require('../controller/PointController');
const authMiddleware = require('../middleware/AuthMiddleware')




router.use(authMiddleware.isContributor)

router.post('/new-bill', ContributorController.createBill);
router.get('/my-bills', ContributorController.viewMyBill);
router.post('/become-partner',ContributorController.requestPartnerRole);
router.get('/point',PointController.getPointByUser);

module.exports = router