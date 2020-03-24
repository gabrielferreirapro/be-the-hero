const express = require("express");

const app = express();

// app.use(express.json())

app.get("/", (req, res) => {
  return res.json({
    teste: "teste"
  });
});
app.listen(3333);
