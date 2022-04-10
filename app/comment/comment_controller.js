const commentRepository = require("./comment_repository")

exports.add = async (req, res, next) => {
    try {
        const comment = await commentRepository.create(req.body);

        return res.json({
            message: "You just commented",
            data: comment
        });
    } catch (err) {
        console.log("Error commenting on this post", err)
    }
}

exports.get = async (req, res, next) => {

}

exports.update = async (req, res, next) => {

}

exports.delete = async (req, res, next) => {

}