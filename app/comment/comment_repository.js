const Repository = require("../../Repository");
const {Comment}= require("../../models");

class CommentRepository extends Repository {
    constructor() {
        super(Comment);
    };
}

module.exports = new CommentRepository();