const { Http } = require('@status/codes');
const Joi = require('joi');

exports.add = async (req, res, next) => {
    console.log("Add validation running")
    try {
        const schema = Joi.object({
            body: Joi.string().required(),
            userId: Joi.string().required()
        });

        const value = schema.validate(req.body, { abortEarly: false });
        // console.log("Validation: ", JSON.stringify(value.error.details));
        console.log(value, body, userId);
        if (value && value.error) {
            const errors = value.error.details.map((detail) => {
                return { key: detail.path[0], message: detail.message.replace(/['"]/g, '') }
            });
            return res.status(Http.BadRequest).json(errors);
        }

    } catch (err) {
        console.log("New post validation error", err);
    }
    return next();
}