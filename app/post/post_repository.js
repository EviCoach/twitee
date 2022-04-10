const Repository = require("../../Repository");
const {Post}= require("../../models");

class PostRepository extends Repository {
    constructor() {
        super(Post);
    };
}

module.exports = new PostRepository();