const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 8080;

app.get("/course", (req, res) => {
  return res.json({ course: Number((100 * Math.random(76)).toFixed(2)) });
});

app.listen(PORT, () => console.log(`api server started on ${PORT} port`));
