const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    cardNumber: {
      
      type: String,

      default: "c001",
    },

    cardType: {
      type: String,
      required: true,
      enum:["REGULAR", "SPECIAL"]
    },

    customerName: {
      type: String,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },

    vision: {
      type: String,
      required:true
    },

    customerID: {
      type: String,
      refs: "customerProjectOne",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('cardProjectOne' , cardSchema);