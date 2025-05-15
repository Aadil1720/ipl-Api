const Joi = require('joi');
const { ValidationError } = require('./errors');

const playerSchema = Joi.object({
    name: Joi.string().required(),
    team: Joi.string().required(),
    country: Joi.string().required(),
    runs: Joi.number().min(0).required(),
    role: Joi.string().valid('Batsman', 'Bowler', 'All-rounder').required(),
    salary: Joi.number().positive().required(),
});

const validatePlayer = (data) => {
    const { error } = playerSchema.validate(data);
    return error ? new ValidationError(error.details[0].message) : null;
};

const validateUpdatePlayer = (data) => {
    const { error } = playerSchema.validate(data, { stripUnknown: true });
    return error ? new ValidationError(error.details[0].message) : null;
};

module.exports = { validatePlayer, validateUpdatePlayer };
