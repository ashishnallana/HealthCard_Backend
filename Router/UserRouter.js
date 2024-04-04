const { Router } = require("express");
const { signUp, verifyOtp, signIn } = require("../Controllers/UserController");
const router = Router();
const userMiddleware = require("../Middleware/AuthMiddleware");
const { User } = require("../Models/UserModel");
const { Organisation } = require("../Models/OrgModel");
const { Report } = require("../Models/ReportModel");

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

router.post("/get-user", userMiddleware, async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await User.findOne({
      _id,
    });
    if (user) {
      return res.status(200).send({
        success: true,
        message: "User details fetched successfully",
        user,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Invalid User",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Some error occured",
    });
  }
});

router.post("/give-access", userMiddleware, async (req, res) => {
  const { org_id, _id } = req.body;
  try {
    const org = await Organisation.findOne({
      _id: org_id,
    });
    if (org) {
      const user = await User.findOne({
        _id,
      });
      user.access.push({ org_id });
      await user.save();
      return res.status(200).send({
        success: true,
        message: "Access granted successfully",
        org,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Invalid Organization ID",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Some error occured",
    });
  }
});

router.get("/fetch-user-reports", userMiddleware, async (req, res) => {
  const { id } = req.query;
  try {
    console.log(id);
    const reports = await Report.find({ patient_id: id });
    return res.status(200).send({
      success: true,
      message: "Reports fetched successfully",
      reports,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Some error occured",
    });
  }
});

module.exports = router;
