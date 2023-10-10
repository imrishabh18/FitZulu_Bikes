const express = require("express");
const axios = require("axios");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//load bikes.json into array
const loadBikes = () => {
  const jsonData = fs.readFileSync("bikes.json", "utf8");
  return JSON.parse(jsonData);
};

// bikes/location endpoint
app.get("/bikes/all/:location", (req, res) => {
  const { location } = req.params;
  if (location == "US-NC" || location == "IE" || location == "IN") {
    const bikesData = loadBikes();
    const convertedBikes = bikesData.map((bike) => {
      let rate = 1.0;
      if (location == "US-NC") {
        rate = 0.9;
      }
      if (location == "IN") {
        rate = 0.8;
      }
      if (location == "IN") {
        rate = 0.85;
      }
      bike.price = bike.price * rate;
      return {
        ...bike,
      };
    });

    console.log(convertedBikes);
    res.status(200);
    res.send(convertedBikes);
  }
  res.status(400);
  res.send(`No INFO available for ${location}`);
});

app.get("/bikes/team", (req, res) => {
  res.status(200);
  res.send({
    team: "bikers",
    membersNames: ["Regards Backends Team "],
  });
});

//sort through price
app.get("/test", (req, res) => {
  const bikesData = loadBikes();
  console.log(req.params);
});

//listen on port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
