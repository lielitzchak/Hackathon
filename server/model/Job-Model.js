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
        status: "cv sent",
      },
      {
        status: "tech interview",
        date: Date.now(),
      },
      {
        status: "HR interview",
        date: Date.now(),
      },
      {
        status: "ceo interview",
        date: Date.now(),
      },
      {
        status: "Offer",
        date: Date.now(),
      },
      {
        status: "denied",
        stage: "",
      },
    ],

    location: { type: String },
    link: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
