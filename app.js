const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.post("/addresses", (req, res) => {
    console.log(req.body);
    res.send(req.body)
});

const port = 3000
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });