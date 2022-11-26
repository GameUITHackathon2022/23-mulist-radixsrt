const router=require('express').Router();
const userRouter = require('./UserRouter')
const partnerRouter= require('./PartnerRouter')
const adminRouter = require('./AdminRouter')
const contributorRouter = require('./ContributorRouter')

router.use('/user',userRouter);
router.use('/partner', partnerRouter);
router.use('/admin', adminRouter);
router.use('/contributor', contributorRouter);





router.use((err, req, res, next) => {
    if (err) res.status(400).send(err)
})
router.use('/', (req, res, next) => {
    res.status(404).send({error:"Page not found"})
})



module.exports = router