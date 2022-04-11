const commentRepository = require("./comment_repository")

exports.add = async (req, res, next) => {
    const payload = {
        postId: req.params.postId,
        body: req.body.body,
        userId: req.user.id
    }
    console.log("Comment payload ::::::", payload);
    try {
        const comment = await commentRepository.create(payload);

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