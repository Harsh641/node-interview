const express = require("express")
const app = express()
const apiroutes = require("./api-routes")
const mongoose = require("mongoose")
const axios = require('axios');
const CORS = require("cors")
const request = require("request")

// mongoose.connect("mongodb://localhost:27017/interview")

app.use("/api", apiroutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.......');
});

app.get("/", function(req, res){
    res.write("Welcome...")
    res.end()
})