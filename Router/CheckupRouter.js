const { Router } = require("express");
const router = Router();
const { User } = require("../Models/UserModel");

router.post("/post-report", async (req, res) => {
  const { patient_id, org_id, files } = req.body;

  try {
    const user = await User.findById(patient_id);
    if (user) {
      user.reports.push({ org_id, files });
      await user.save();
      return res.status(200).send({
        success: true,
        message: "Report created successfully",
      });
    } else {
      return res.status(403).json({ message: "Invalid data" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Some error occured",
    });
  }
});

module.exports = router;
