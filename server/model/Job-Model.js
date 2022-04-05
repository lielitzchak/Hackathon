const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema(
  {
    jobName: { type: String, required: true },
    userId: { type: String, required: true, ref: "User" },
    role: { type: String },
    companyName: { type: String },
    contentName: { type: String },
    contentPhone: { type: Number },
    contentEmail: { type: String },
    applyDate: { type: Date },
    status: [
      {
        status: { type: String },
        date: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
