const express = require("express");
const NgoController = require("./controllers/NgoController");
const routes = express.Router();

routes.get("/ngo", NgoController.index);
routes.post("/ngo", NgoController.create);

module.exports = routes;
