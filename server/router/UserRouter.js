const router=require('express').Router();
const UserController = require('../controller/UserController')

// const AuthController = require('../controller/AuthController')

router.post('/signup',UserController.creatNewAccount);
router.post('/login',UserController.verifyAccount);
router.get('/all-campaigns', UserController.viewAllCampaign );
router.get('/top-point', UserController.getTop8Point );
//router.post('/auth/google',AuthController.verifyGoogleLogin);

module.exports = router