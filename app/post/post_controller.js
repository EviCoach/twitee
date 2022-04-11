const postRepository = require("./post_repository");
const {Comment,Like } = require("../../models");
const userRepository = require("../user/user_repository");
const { Http } = require("@status/codes");
exports.add = async (req, res, next) => {
    const post = await postRepository.create(req.body);
    res.json({
        message: "New post created",
        data: post
    });
}

exports.get = async (req, res, next) => {
    const postId = req.params.id;
    if (!postId) {
        // fetch all posts with their comments
        // await postRepository.all({ include: [{model: Comment, as: 'comments'}] });
        const posts = await postRepository.all({ include: [{ model: Comment, as: 'comments' }, { model: Like, as: 'likes' }] });
        res.json({
            message: "Posts fetched successfully",
            data: posts
        });
    }
}

exports.update = async (req, res, next) => {

}

exports.delete = async (req, res, next) => {
    const userId = req.user.id;
    const postId = req.params.id;
    console.log("User id is: ", userId, "postId: ", postId);
    // const post = await postRepository.findById(postId);
    // const user = await userRepository.findById(userId);
    const post = await postRepository.findOne({ id: postId });
    const user = await userRepository.findOne({ id: userId });
    console.log("user and post ids", post.userId, user.id, user, post)
    if (!user) {
        console.log("User does not exist")
        return res.status(Http.Forbidden).json({
            error: "User with this id does not exist"
        });
    }
    console.log("got here 1")
    if (!post) {
        console.log("Post does not exist")

        return res.status(Http.Forbidden).json({
            error: "Post with this id not found"
        });
    }
    console.log("got here 2")
    if (post && post.userId !== user.id) {
        return res.status(Http.Forbidden).json({
            error: "You did not create this post, you cannot delete it."
        })
    }
    console.log("got here 3")
    const data = await postRepository.delete({ id: postId });

    console.log("Deleting post:", data)

    res.json({ message: "Post removed" });
}