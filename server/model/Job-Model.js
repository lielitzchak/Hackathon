const mongoose = require("mongoose");
const Job = new mongoose.Schema({
  jobName: { type: String, required: true },
  userId: { type: String, required: true, ref: "User" },
  role: { type: String },
  companyName: { type: String },
  contentName: { type: String },
  contentPhone: { type: Number },
  contentEmail: { type: String },
  applyDate: { type: Date },
  status: { type: String },
  location: { type: String },
  link: { type: String },
});
