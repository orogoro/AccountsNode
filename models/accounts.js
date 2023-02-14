const { Accounts } = require('../db/accountsModel');

const listAccounts = async (page, limit) => {
  try {
    const skip = (page - 1) * limit;
    const data = await Accounts.find({}).limit(limit).skip(skip);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const addAccount = async (body) => {
  const { nameCompany, nameGame, summe, currency } = body;
  const data = await Accounts.find({});
  const count =
    data.length !== 0 ? (Number(data.slice(-1)[0].count) + 1).toString() : '1';

  try {
    const newContact = new Accounts({
      count,
      nameCompany,
      nameGame,
      summe,
      currency,
      payment: false,
    });
    await newContact.save();

    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const updateStatusAccount = async (contactId, body) => {
  const { payment } = body;
  try {
    const updatePost = await Accounts.findByIdAndUpdate(
      contactId,
      { payment },
      {
        new: true,
      }
    );

    return updatePost;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listAccounts,
  addAccount,
  updateStatusAccount,
};
