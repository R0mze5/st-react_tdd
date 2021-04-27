const express = require("express");

const app = express();

const PORT = 8080;

app.get("/course", (req, res) => {
  return res.json({ course: Number((100 * Math.random(76)).toFixed(2)) });
});

app.listen(PORT, () => console.log(`api server started on ${PORT} port`));
