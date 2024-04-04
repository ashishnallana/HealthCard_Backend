const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const accessPassSchema = Schema(
  {
    org_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileno: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    aadhar: {
      required: true,
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    access: [accessPassSchema],
    // qr: {
    //   type: String,
    //   default: function () {
    //     return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this._id}`;
    //   },
    // },
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );
  return token;
};

module.exports.User = model("User", userSchema);
