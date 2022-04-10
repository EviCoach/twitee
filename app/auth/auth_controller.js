const { Http } = require('@status/codes');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../../config/devConf');

/*
Get user input.
Validate user input.
Validate if the user already exists.
Encrypt the user password.
Create a user in our database.
And finally, create a signed JWT token.
*/
const authRepository = require('./auth_repository');

exports.login = async (req, res, next) => {
    const { name, email, password } = req.body;
}

exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await authRepository.findOne({ email });
    if (user) {
        res.status(Http.BadRequest).json({
            message: "User already exists. Please login."
        });
    }
    // Encrypt user password
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await authRepository.create({
        email,
        password: hashedPassword
    });

    console.log("Created user: ", user);

    const token = jwt.sign(
        { authId: user.uuid, email },
        config.TOKEN_KEY,
        { expiresIn: "2h" }
    )

    res.json(user);
}

exports.reset = async (req, res, next) => {

}

exports.code = async (req, res, next) => {

}