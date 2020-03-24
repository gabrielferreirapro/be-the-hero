const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const routes = express.Router();

routes.get("/ngo", async (req, res) => {
  const ngos = await connection("ngo").select("*");
  return res.json(ngos);
});

routes.post("/ngo", async (req, res) => {
  const { name, email, whatsapp, city, state } = req.body;

  const id = crypto.randomBytes(4).toString("HEX");

  await connection("ngo").insert({ id, name, email, whatsapp, city, state });

  return res.json({ id });
});

module.exports = routes;
