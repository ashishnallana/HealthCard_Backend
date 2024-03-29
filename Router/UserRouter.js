const { Router } = require("express");
const { signUp, verifyOtp, signIn } = require("../Controllers/UserController");
const router = Router();
const userMiddleware = require("../Middleware/AuthMiddleware");

router.post("/signup", signUp); // Sign Up Route
router.post("/signup/verify", verifyOtp); // Verify OTP Route
router.post("/signin", signIn); // Sign In Route

router.get("/user-auth", userMiddleware, (req, res) => {
  res.status(200).send({
    ok: true,
    success: true,
    message: "You are Authorized",
  });
});

module.exports = router;
