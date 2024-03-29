const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const reportSchema = Schema(
  {
    org_id: {
      type: String,
      required: true,
    },
    files: [String],
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
    password: {
      type: String,
      required: true,
    },
    reports: [reportSchema],
    qr: {
      type: String,
      default: function () {
        return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this._id}`;
      },
    },
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
