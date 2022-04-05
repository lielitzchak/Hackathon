const mongoose = require('mongoose');
require('dotenv').config();


mongoose
  .connect(process.env.STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => 
    console.log('connection to STRING_CONNECTION')
  )
  .catch(err => {
    console.log(err)
  })

module.exports= mongoose.connection;