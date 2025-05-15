

const {
    validatePlayer,
    validateUpdatePlayer: validateUpdateSchema
} = require('../utils/validation');

const validateCreatePlayer = (req, res, next) => {
    const error = validatePlayer(req.body);
    if (error) return next(error);
    next();
};

const validateUpdatePlayer = (req, res, next) => {
    const error = validateUpdateSchema(req.body);
    if (error) return next(error);
    next();
};

module.exports = { validateCreatePlayer, validateUpdatePlayer };
