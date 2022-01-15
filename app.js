const express = require("express");
const app = express();
const axios = require("axios");
const { getLatAndLong } = require("./controllers/controller");

app.use(express.json());

app.post("/", getLatAndLong);

const port = 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
