const { Http } = require("@status/codes");
var jwt = require('jsonwebtoken');
const config = require("../../config/devConf");

exports.login = (req, res, next) => {

}

exports.signup = (req, res, next) => {

}

exports.authenticate = (req, res, next) => {
    const bearerHeader = req.body.token || req.query.token || req.headers["authorization"];
    if (!bearerHeader) {
        return res.status(Http.Forbidden).json({
            error: "A token is required for authentication"
        });
    }
    try {
        const token = bearerHeader.split(' ')[1];
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        console.log("Decoded user ", decoded);
        req.user = decoded;
    } catch (err) {
        console.log("Token error: ", err);
        return res.status(Http.BadRequest).json({
            error: "Invalid token"
        });
    }
    return next();
}