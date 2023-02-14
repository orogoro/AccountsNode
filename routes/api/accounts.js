const e = require('express');
const express = require('express');
const router = express.Router();

const { middlewaresAccounts } = require('../../middlewares');

const {
  listAccounts,
  addAccount,
  updateStatusAccount,
} = require('../../models/accounts');

router.get('/', async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const contacts = await listAccounts(page, limit);
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
});

router.post(
  '/',
  middlewaresAccounts.addPostValidation,
  async (req, res, next) => {
    try {
      const body = req.body;

      const newContact = await addAccount(body);

      res.status(201).json(newContact);
    } catch (error) {
      res.status(500).json({ error: e.message });
    }
  }
);

router.patch(
  '/:accountId/payment',
  middlewaresAccounts.putchValidationPayment,
  async (req, res, next) => {
    try {
      const id = req.params.accountId;
      const body = req.body;

      const contact = await updateStatusAccount(id, body);

      if (!contact) {
        return res.status(404).json({ message: 'Not found' });
      }

      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
