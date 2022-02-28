const cardModel = require('../models/cardModel.js');
const { findOneAndUpdate } = require('../models/customerModel.js');
const customerModel = require('../models/customerModel.js');
const idAutoIncrement = require("id-auto-increment");

//****************** API for create card******************
const createCard = async function (req, res) {
  try {
    let CardDetails = req.body;
    let { cardType, customerName, status, vision, customerID } = CardDetails;
    let dbexists = await cardModel.find();
    let length = dbexists.length;
    let Carddata = {
      cardNumber: length + 1,
      cardType,
      customerName,
      status,
      vision,
      customerID,
    };
    const carddetails = await cardModel.create(Carddata);
    return res
      .status(201)
      .send({ status: true, message: "success", data: carddetails });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }
};

//****************** API for list of all card with filter******************

const getCreatedCardList = async function (req, res) {
    try {
       const list = await cardModel.find({ status: "ACTIVE" });
       
      res.status(200).send({ status: true, message: "Created card list", data: list });

    } catch (error) {
    res.status(500).send({ status: false, message: error.message })
    }

};
 
module.exports = {createCard, getCreatedCardList};