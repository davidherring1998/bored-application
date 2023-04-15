const router = require("express").Router();
const {
  registerUser,
  getUser,
  loginUser,
} = require("../controllers/userRoutes");
const { protect } = require("../middleware/auth");

router.post("/", registerUser);
router.get("/:id", protect, getUser);
router.post("/login", loginUser);

module.exports = router;

