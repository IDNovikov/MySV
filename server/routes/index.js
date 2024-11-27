const Router = require("express");
const router = new Router();
const invitesRouter = require("./invitesRouter");

router.use("/invite", invitesRouter);
module.exports = router;
