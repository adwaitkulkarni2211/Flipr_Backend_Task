const axios = require("axios")
require('dotenv').config();

exports.getLatAndLong = async (req, res) => {
  const result = await Promise.all(
    req.body.map((location) => {
      return apiCall(location);
    })
  );

  res.json(result);
};

const apiCall = (location) => {
  return new Promise((resolve) => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: location,
          key: process.env.KEY,
        },
      })
      .then((response) => {
        //console.log(response);
        let result = {
            add: response.data.results[0].formatted_address,
            location: []
        }
        result.location.push(response.data.results[0].geometry.location.lat);
        result.location.push(response.data.results[0].geometry.location.lng);
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
