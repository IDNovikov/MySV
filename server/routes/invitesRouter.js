const Router = require("express");
const router = new Router();
const invitesController = require("../controllers/invitesController");

router.post("/", invitesController.create);

module.exports = router;
