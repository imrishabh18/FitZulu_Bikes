const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const filter = require("../utils/utils");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//load bikes.json into array
const loadBikes = () => {
  const jsonData = fs.readFileSync("assets/bikes.json", "utf8");
  return JSON.parse(jsonData);
};

// bikes/location endpoint
app.get("/bikes/all/:location", (req, res) => {
  const { location } = req.params;

  switch (location) {
    case "US-NC":
      rate = 0.9;
      break;
    case "IN":
      rate = 0.8;
      break;
    case "IE":
      rate = 0.85;
      break;
    default:
      res.status(400);
      return res.send(`No INFO available for ${location}`);
  }

  const bikesData = loadBikes();
  const convertedBikes = bikesData.map((bike) => ({
    ...bike,
    price: bike.price * rate,
  }));

  res.status(200).json(convertedBikes);
});

app.get("/bikes/team", (req, res) => {
  res.status(200);
  res.send({
    team: "bikers",
    membersNames: ["Regards Backends Team "],
  });
});

//sort through price
app.get("/bikes/search", (req, res) => {
  const bikesData = loadBikes();
  const brand = req.query.brand;
  const minPrice = req.query.minprice;
  const maxPrice = req.query.maxprice;
  const rating = req.query.rating;

  const response = filter.filterByBrand(bikesData, brand);
  const responseRange = filter.filterByRange(response, minPrice, maxPrice);
  const finalResponse = filter.filterByRating(responseRange, rating);

  res.json({ finalResponse });
});

//listen on port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
