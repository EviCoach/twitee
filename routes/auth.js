const Router = require('express').Router;
const router = Router();
const authController = require("../app/auth/auth_controller");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.post("/reset", authController.reset);
router.get("/code", authController.code);
router.get("/verify/:authId", authController.verify);

module.exports = router;