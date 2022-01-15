const axios = require("axios")

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
          key: "AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw",
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
