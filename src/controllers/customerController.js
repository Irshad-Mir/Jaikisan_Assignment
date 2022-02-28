const customerModel = require("../models/customerModel.js");
//import { v4 as uuidv4 } from "uuid";
const isVaildEmail = require("../validations/validator.js");
const { v4: uuidv4 } = require("uuid");

//****************** API for create customer ******************
const registerCustomer = async function (req, res) {
  try {
    let customer = req.body;
    let {
      firstName,
      lastName,
      mobileNumber,
      DOB,
      email,
      address,
      customerID,
      status,
    } = customer;
    let uuid = uuidv4();
    let customerdata = {
      firstName,
      lastName,
      mobileNumber,
      DOB,
      email,
      address,
      customerID: uuid,
      status,
    };
    const createddata = await customerModel.create(customerdata);
    return res
      .status(201)
      .send({ status: true, message: "success", data: createddata });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }
};

//****************** API for list of all customer ******************
const getcustomerList = async function (req, res) {
  try {
    const list = await customerModel.find({ status: "ACTIVE" });
    return res
      .status(200)
      .send({ status: true, message: "Register Customer list", data: list });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const deletecustomerById = async (req, res) => {
  try {
    let customerID = req.params._id;

    let customerFound = await customerModel.findOne({ _id: customerID });

    if (!customerFound) {
      return res
        .status(404)
        .send({ status: false, msg: "No product found with provided ID" });
    }
    let deletedcustomer = await customerModel.findOneAndUpdate(
      { _id: customerID },
      { status: "INACTIVE", isDeleted: true },
      { new: true }
    );
    return res.status(200).send({
      status: true,
      message: "customer Deleted Sucessfully",
      data: deletedcustomer,
    });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

//****************** for export functions ******************
module.exports = { registerCustomer, getcustomerList, deletecustomerById };
