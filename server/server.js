const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./DB/DB");
const usersRouters = require("./routes/User-Route");
const authRouter = require("./routes/Auth-Route");
const jobsRouter = require("./routes/Jobs-Route");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {});

app.use("/auth", authRouter);

app.use("/users", usersRouters);
app.use("/job", jobsRouter);

app.use("/", () => {
  console.log(`Hello World`);
});

// if (process.env.NODE_ENV === 'production') {
//      app.use(express.static(path.join(__dirname, '../client/build')));
//      app.get('*', (req, res)=>{
//      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//      });
//      }
