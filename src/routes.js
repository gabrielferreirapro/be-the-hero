const express = require("express");
const NgoController = require("./controllers/NgoController");
const IncidentController = require("./controllers/IncidentController");
const routes = express.Router();

routes.get("/ngo", NgoController.index);
routes.post("/ngo", NgoController.create);

routes.get("/incident", IncidentController.index);
routes.post("/incident", IncidentController.create);

module.exports = routes;
