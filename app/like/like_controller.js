const likeRepository = require("./like_repository");

exports.like = async (req, res, nex) => {
    const postId = req.params.postId;
    const user = req.user;

    // check if this user is in the like table
    // if it is, remove it
    // else add it
    let like = await likeRepository.findOne({ userId: user.id, postId: postId });
    console.log("Like found: ", like);

    if (!like) {
        like = likeRepository.create({ userId: user.id, postId: postId });
        return res.json({
            data: { liked: true }
        })
    }
    let unlike = likeRepository.delete({ userId: user.id, postId: postId });
    return res.json({
        data: { liked: false }
    })
}