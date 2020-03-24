const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const incidents = await connection("incident").select("*");
    return res.json(incidents);
  },
  async create(req, res) {
    const { title, description, value } = req.body;
    const ngo_id = req.headers.authorization;

    const [id] = await connection("incident").insert({
      title,
      description,
      value,
      ngo_id
    });

    return res.json({ id });
  }
};
