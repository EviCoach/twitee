const Router = require('express').Router;
const router = Router();
const postController = require("../app/post/post_controller");
const authValidator = require("../app/auth/auth_validator");
const postValidator = require("../app/post/post_validator")

router.post("/", authValidator.authenticate, postValidator.add, postController.add);
router.get("/:id", authValidator.authenticate, postController.get);
router.put("/:id", authValidator.authenticate, postController.update);
router.delete("/:id", authValidator.authenticate, postController.delete);

module.exports = router;