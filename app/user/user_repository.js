const Repository = require("../../Repository");
const {User} = require("../../models");

class UserRepository extends Repository {
    constructor() {
        super(User);
    };
}

module.exports = new UserRepository();