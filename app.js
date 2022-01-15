const express = require('express')
const app = express()
const axios = require("axios")
const fs = require("fs");

app.use(express.json())

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.post("/addresses", (req, res) => {
    let result = []
    req.body.forEach(location => {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: "AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw"
            }
        }).then((response) => {
            //console.log(response);
            result.push(response.data.results[0].geometry.location);
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    })
    res.json(result);
})

const port = 3000
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });