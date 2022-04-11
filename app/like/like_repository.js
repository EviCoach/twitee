const Repository = require("../../Repository");
const { Like } = require("../../models");

class LikeRepository extends Repository {
    constructor() {
        super(Like);
    };
}

module.exports = new LikeRepository();