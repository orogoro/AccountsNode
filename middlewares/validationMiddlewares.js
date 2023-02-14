const Joi = require('joi');

module.exports = {
  addPostValidation: (req, res, next) => {
    const schema = Joi.object({
      nameCompany: Joi.string()
        .valid('Company1', 'Company2', 'Company3')
        .required(),
      nameGame: Joi.string().min(2).max(40).required(),
      summe: Joi.string().required(),
      currency: Joi.string()
        .valid('dollar', 'euro')
        .default('dollar')
        .required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: 'missing required field' });
    }
    next();
  },

  putchValidationPayment: (req, res, next) => {
    const schema = Joi.object({
      payment: Joi.bool().required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: 'missing field payment' });
    }
    next();
  },
};
