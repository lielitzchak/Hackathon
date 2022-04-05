const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./DB/DB')

const app = express();
app.use(cors());
app.listen(process.env.PORT , ()=>{});

app.use('/', ()=>{
    console.log(`Hello World ffff`);
})


// if (process.env.NODE_ENV === 'production') {
//      app.use(express.static(path.join(__dirname, '../client/build')));
//      app.get('*', (req, res)=>{
//      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//      });
//      }