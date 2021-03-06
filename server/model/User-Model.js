const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileImg: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    title: { type: String, required: true },
    jobs: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Job'
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
