const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUser);
router.post("/users", userController.addUser);
router.get("/users/:id", userController.getUserById);

module.exports = router;
