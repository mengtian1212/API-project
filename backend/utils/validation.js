const { validationResult } = require('express-validator');
const { check } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        const errors = {};
        validationErrors
            .array()
            .forEach(error => errors[error.path] = error.msg);
        // .forEach(error => errors[error.param] = error.msg);

        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad request.";
        next(err);
    }
    next();
};

const validateGroup = [
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 1, max: 60 })
        .withMessage("Name must be 60 characters or less"),
    check('about')
        .exists({ checkFalsy: true })
        .isLength({ min: 50 })
        .withMessage("About must be 50 characters or more"),
    check('type')
        .exists({ checkFalsy: true })
        .isIn(['Online', 'In person'])
        .withMessage("Type must be 'Online' or 'In person'"),
    check('private')
        .exists({ checkFalsy: true })
        .isBoolean()
        .withMessage("Private must be a boolean"),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage("City is required"),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage("State is required"),
    handleValidationErrors
];

const validateVenue = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage("Street address is required"),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage("City is required"),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage("State is required"),
    check('lat')
        .exists({ checkFalsy: true })
        .isDecimal({ force_decimal: true })
        .withMessage("Latitude is not valid"),
    check('lat')
        .exists({ checkFalsy: true })
        .isFloat({ min: -90, max: 90 })
        .withMessage("Latitude is not valid"),
    check('lng')
        .exists({ checkFalsy: true })
        .isDecimal({ force_decimal: true })
        .withMessage("Longitude is not valid"),
    check('lng')
        .exists({ checkFalsy: true })
        .isFloat({ min: -180, max: 180 })
        .withMessage("Longitude is not valid"),
    handleValidationErrors
];

module.exports = {
    handleValidationErrors, validateGroup, validateVenue
};
