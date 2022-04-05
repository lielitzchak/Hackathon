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
  status: {
    type: Array,
    statusName: [
      {
        status: "cv sent",
      },
      {
        status: "tech interview",
        date: "2020-01-01",
      },
      {
        status: "HR interview",
        date: "2019-01-01",
      },
      {
        status: "ceo interview",
        date: "2018-01-01",
      },
      {
        status: "Offer",
        date: "2019-01-02",
      },
      {
        status: "denied",
        stage: "tech interview",
      },
    ],
  },
  location: { type: String },
  link: { type: String },
});
