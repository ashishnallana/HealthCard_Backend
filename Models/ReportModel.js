const { Schema, model } = require("mongoose");

module.exports.Report = model(
  "Report",
  Schema(
    {
      patient_id: { type: String, required: true },
      // patient_name: { type: String, required: true },
      org_id: {
        type: String,
        required: true,
      },
      org_name: {
        type: String,
        required: true,
      },
      files: [String],
    },
    { timestamps: true }
  )
);
