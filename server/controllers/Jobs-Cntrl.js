const jobs = require("../model/Job-Model");
const Users = require("../model/User-Model");

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
        .findById(req.params.userId)
        .then((data) => console.log(data))
        .catch((err) => res.status(404).json(err));
    } catch (err) {
      res.status(500).json({ massage: "Server Error" });
    }
  },
  postJob: async (req, res) => {
    try {
      const user = await Users.findById(req.body.userId);
      await jobs
        .create(req.body)
        .then(async (data) => {
          console.log(data);
          user.jobs.push(data._id);
          await Users.findByIdAndUpdate(data.userId, { jobs: user.jobs });
        })
        .then((data) => res.status(200).json({ massage: "Success" }))
        .catch((err) => console.error(err));
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
  deleteJobId: async (req, res) => {
    try {
      const jobRemove = await jobs.findById(req.params.id);
      const userDeleteFrom = await Users.findById(jobRemove.userId);
      userDeleteFrom.jobs.splice(userDeleteFrom.jobs.indexOf(jobRemove._id), 1);
      await jobs.findByIdAndRemove(req.params.id);
      userDeleteFrom.save();
      res.status(200).json({ massage: "Success" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ massage: err });
    }
  },
};
