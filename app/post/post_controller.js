const postRepository = require("./post_repository");
exports.add = async (req, res, next) => {
    const post = await postRepository.create(req.body);
    res.json({
        message: "New post created",
        data: post
    });
}

exports.get = async (req, res, next) => {

}

exports.update = async (req, res, next) => {

}

exports.delete = async (req, res, next) => {

}