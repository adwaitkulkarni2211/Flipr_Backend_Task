const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.post("/addresses", async (req, res) => {
  const result = await Promise.all(req.body.map(location => {
      return apiCall(location);
  }))

  res.json(result);
});

const apiCall = (location) => {
  return new Promise((resolve) => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: location,
          key: "AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw",
        },
      })
      .then((response) => {
        //console.log(response);
        resolve(response.data.results[0].geometry.location);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const port = 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
