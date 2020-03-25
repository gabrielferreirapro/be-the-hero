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
  },
  async delete(req, res) {
    const { id } = req.params;
    const ngo_id = req.headers.authorization;

    const incident = await connection("incident")
      .where("id", id)
      .select("ngo_id")
      .first();
    if (incident.ngo_id !== ngo_id) {
      return res.status(401).json({ error: "Operation not permitted." });
    }

    await connection("incident")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
