const express = require("express");
const app = express();
require('dotenv').config();

const task1Route = require("./Routes/task1")
const task2Route = require("./Routes/task2")

//middleware
app.use(express.json());

//route
app.use("/api", task1Route)
app.use("/api", task2Route);

//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
