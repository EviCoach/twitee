const Router = require('express').Router;
const router = Router();
const authController = require("../app/auth/auth_controller");

router.post("/login", authController.login);
router.post("/signup", authController.register);
router.post("/reset", authController.reset);
router.post("/code", authController.code);

module.exports = router;