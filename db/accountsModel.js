const { Schema, model } = require('mongoose');

const accountsSchema = Schema(
  {
    count: {
      type: String,
    },
    nameCompany: {
      type: String,
      enum: ['Company1', 'Company2', 'Company3'],
      required: [true, 'Name company is required'],
    },
    nameGame: {
      type: String,
      required: [true, 'Name game is required'],
    },
    summe: {
      type: String,
      required: [true, 'Summe is required'],
    },
    currency: {
      type: String,
      enum: ['dollar', 'euro'],
      default: 'dollar',
    },
    payment: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Accounts = model('accounts', accountsSchema);

module.exports = {
  Accounts,
};
