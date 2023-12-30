const express = require("express");
const { getUser, updateUser, deleteUser } = require("../controllers/User");
const router = express.Router();

router.get("/:id", getUser);
router.patch('/update/:id', updateUser)
router.delete("/delete/:id", deleteUser);

module.exports = router;