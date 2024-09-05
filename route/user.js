const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controllers/user");

router.get("/all", userController.getAllUser);
router.post("/add", userController.addUser);

module.exports = router;
