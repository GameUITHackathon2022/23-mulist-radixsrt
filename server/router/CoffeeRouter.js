const coffeeController = require("../controller/coffeeController");
const router = require("express").Router();


//create
router.post("/", coffeeController.createCoffee);

//get all coffee
router.get("/", coffeeController.getAllCoffee);
module.exports = router;