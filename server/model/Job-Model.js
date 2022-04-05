const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  userId: { type: String, required: true, ref: 'User' },
  role: { type: String },
  companyName: { type: String },
  contentName: { type: String },
  contentPhone: { type: Number },
  contentEmail: { type: String },
  applyDate: { type: Date },
  status: [
    {
      status: 'cv sent',
      date: ''
    },
    {
      status: 'tech interview',
      date: ''
    },
    {
      status: 'HR interview',
      date: ''
    },
    {
      status: 'ceo interview',
      date: ''
    },
    {
      status: 'Offer',
      date: ''
    },
    {
      status: 'denied',
      stage: ''
    }
  ],

  location: { type: String },
  link: { type: String }
})
