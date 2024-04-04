const bcrypt = require("bcrypt");
const axios = require("axios");
const { Organisation } = require("../Models/OrgModel");

module.exports.registerOrg = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const org = await Organisation.findOne({
      email: req.body.email,
    });
    if (org)
      return res
        .status(400)
        .send({ success: false, message: "Organisation already exists" });

    const password = await bcrypt.hash(req.body.password, 10);
    // const username = email.split("@")[0];

    const newOrg = new Organisation({
      name: req.body.name,
      city: req.body.city,
      address: req.body.address,
      mci: req.body.mci,
      rci: req.body.rci,
      email,
      password,
    });
    const token = newOrg.generateJWT();
    const result = await newOrg.save();
    return res.status(200).send({
      success: true,
      message: "Organisation added successfully",
      token: token,
      org: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports.orgLogin = async (req, res) => {
  try {
    const org = await Organisation.findOne({
      email: req.body.email,
    });
    const hashedPassword = await org.password;
    const isValid = await bcrypt.compare(req.body.password, hashedPassword);

    if (org && isValid) {
      const token = org.generateJWT();

      res.status(200).send({
        success: true,
        message: "Organisation logged in",
        //   user: {
        //     _id: user._id,
        //     email: user.email,
        //     username: user.username,
        //   },
        org: {
          _id: org._id,
          email: org.email,
          // username: org.username,
        },
        token: token,
      });
    } else {
      res.send({
        success: false,
        message: "Incorrect email or password",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Some error occured",
    });
  }
};
