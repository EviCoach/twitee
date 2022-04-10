const Router = require('express').Router;
const router = Router();
const postController = require("../app/post/post_controller");

router.post("/", postController.add);
router.get("/:id", postController.get);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

module.exports = router;