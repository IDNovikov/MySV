const path = require("path");
const Invites = require("../models/models");
const ApiError = require("../error/apiError");
const SendMail = require("../mailer/mailer");

class invitesController {
  async create(req, res, next) {
    try {
      const { name, contact } = req.body;
      const invite = await Invites.create({ Name: name, Contact: contact });
      await SendMail(
        `Ilya, u have a new invite from: ${name}, contact: ${contact}`
      );
      return res.json(invite);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
}

module.exports = new invitesController();
