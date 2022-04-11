const Router = require('express').Router;
const router = Router();
const commentController = require("../app/comment/comment_controller");
const authValidator = require("../app/auth/auth_validator")

router.post("/:postId",authValidator.authenticate, commentController.add);
router.delete("/:id", commentController.delete);
router.put("/:id", commentController.update);
router.get("/", commentController.get);


module.exports = router;