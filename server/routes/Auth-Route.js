const authRouter = require("express").Router();
const { register } = require("../controllers/Auth-Cntrl");

authRouter.post("/register", register);
// authRouter.post("/login", login);

module.exports = authRouter;
