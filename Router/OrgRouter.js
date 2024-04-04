const { Router } = require("express");
const { registerOrg, orgLogin } = require("../Controllers/OrgController");
const router = Router();
const orgMiddleware = require("../Middleware/AuthMiddleware");
const { Organisation } = require("../Models/OrgModel");
const { Report } = require("../Models/ReportModel");

router.post("/org-register", registerOrg); // Sign Up Route
router.post("/org-login", orgLogin); // Sign In Route

router.get("/org-auth", orgMiddleware, (req, res) => {
  res.status(200).send({
    ok: true,
    success: true,
    message: "You are Authorized",
  });
});

router.post("/get-org", orgMiddleware, async (req, res) => {
  const { _id } = req.body;
  try {
    const org = await Organisation.findOne({
      _id,
    });
    if (org) {
      return res.status(200).send({
        success: true,
        message: "User details fetched successfully",
        user: org,
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

router.post("/add-report", orgMiddleware, async (req, res) => {
  const { _id, pid, files } = req.body;
  try {
    const newReport = new Report({
      org_id: _id,
      patient_id: pid,
      files,
    });

    const addedReport = await newReport.save();
    return res.status(200).send({
      success: true,
      message: "Report added successfully",
      report: addedReport,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Some error occured",
    });
  }
});

router.get("/fetch-org-reports", orgMiddleware, async (req, res) => {
  const { id } = req.query;
  try {
    console.log(id);
    const reports = await Report.find({ org_id: id });
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

router.get("/fetch-user-reports", orgMiddleware, async (req, res) => {
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
