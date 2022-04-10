const Repository = require("../../Repository");
const {Comment}= require("../../models");

class CommentRepository extends Repository {
    constructor() {
        super(Model);
    };
}

module.exports = new CommentRepository();