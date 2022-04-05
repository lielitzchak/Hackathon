const jobs = require("../model/Job-Model");
module.exports = {
  getAllJobs: async (req, res) => {
    try {
      await jobs
        .find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
    } catch (err) {
      res.status(500).json({ massage: "Server Error" });
    }
  },
  getJobId: (req, res) => {
    try {
      jobs
        .findById(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
    } catch (err) {
      res.status(500).json({ massage: "Server Error" });
    }
  },
  postJob: (req, res) => {
    try {
      jobs
        .create(req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
    } catch (err) {
      res.status(500).json({ massage: "Server Error" });
    }
  },
  putJobId: (req, res) => {
    try {
      jobs
        .findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
    } catch (err) {
      res.status(500).json({ massage: "Server Error" });
    }
  },
  deleteJobId: (req, res) => {
    try {
      jobs
        .findByIdAndDelete(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
    } catch (err) {
      res.status(500).json({ massage: "Server Error" });
    }
  },
};