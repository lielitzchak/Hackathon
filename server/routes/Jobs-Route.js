const jobsRouter = require("express").Router();
const jobsController = require("../controllers/Jobs-Cntrl");

jobsRouter.get("/", jobsController.getAllJobs);

jobsRouter.get("/:userId", jobsController.getAllJobsByUserId);

jobsRouter.post("/", jobsController.postJob);

jobsRouter.put("/:id", jobsController.putJobId);

jobsRouter.delete("/:id", jobsController.deleteJobId);

module.exports = jobsRouter;
