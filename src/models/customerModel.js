const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    mobileNumber: {
      type: String,

      required: "mobile number is required",
      trim: true,
      validator: {
        validator: function (phone) {
          return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(phone);
        },
        message: "Please fill a valid phone number",
        isAsync: false,
      },
    },
    DOB: {
      type: Date,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    address: String,
    customerID: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('customerProjectOne', customerSchema);