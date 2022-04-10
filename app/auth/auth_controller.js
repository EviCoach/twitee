const { Http } = require('@status/codes');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { EMIT } = require('../../config/constants');
const config = require('../../config/devConf');
const { Emitter } = require("../../startups/listeners");
const userRepository = require('../user/user_repository');
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
    const userAuth = await authRepository.findOne({ email });
    if (!userAuth) return res.status(Http.NotFound).json({
        message: "User with this email does not exist"
    });
    const isValid = await bcrypt.compare(password, userAuth.password);

    if (!isValid) {
        return res.status(Http.Forbidden).json({
            message: "Invalid username or password"
        });
    }
    let user = await userRepository.findOne({ email });
    user = JSON.parse(JSON.stringify(user));
    console.log("User json ", user);

    const token = jwt.sign(user, config.TOKEN_KEY, { expiresIn: "2h" });
    user.token = token;

    res.json({ message: "Login success", data: user });
}

exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await authRepository.findOne({ email });
    if (user) {
        return res.status(Http.BadRequest).json({
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
    Emitter.emit(EMIT.USER.CREATED, {name, email});
    res.json({user, token});
}

exports.reset = async (req, res, next) => {

}

exports.code = async (req, res, next) => {

}