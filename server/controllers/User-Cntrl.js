const Users = require('../model/User-Model')
const Jobs = require('../model/Job-Model')

module.exports = {
  putUserId: async (req, res) => {
    try {
      await Users.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err))
    } catch (err) {
      res.status(500).json(err)
    }},

  deleteUserId: async (req, res) => {
    try {
      const deleteUser = await Users.findByIdAndRemove({ _id: req.params.id }) .then(data =>{ res.status(200).json(data); `http://localhost:5000/job/${deleteUser._id}`})
            .catch(err => res.status(404).json(err))
      console.log(deleteUser)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

// spec
