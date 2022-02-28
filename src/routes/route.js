const express = require('express')

const router = express.Router()

const customerController = require('../controllers/customerController.js');
const isVaildEmail = require("../validations/validator.js");
const cardController = require('../controllers/cardController.js');

//****************** customer******************
router.post('/customer', customerController.registerCustomer);

router.get('/getCustomer', customerController.getcustomerList);
router.delete("/deleteCustomer/:_id", customerController.deletecustomerById);

//****************** card ******************
router.post("/cards",  cardController.createCard);

router.get("/getCard", cardController.getCreatedCardList);

module.exports =  router 