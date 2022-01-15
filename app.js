const express = require("express");
const app = express();
const { getLatAndLong } = require("./controllers/controller");
require('dotenv').config();

//middleware
app.use(express.json());

//route
app.post("/", getLatAndLong);

//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
