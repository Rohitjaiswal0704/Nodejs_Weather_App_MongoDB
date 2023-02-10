var express = require("express");
var router = express.Router();
var https = require("https");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/data", function (req, res, next) {
  const querry = req.body.CityName;
  const apikey = "c7c3732e3759546ca89d08ddcd4a2ddb";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    querry +
    "&appid=" +
    apikey +
    "&units=metric";
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);

      const team = weatherData.main.temp;

      const discription = weatherData.weather[0].description;

      res.send(
        "<p style='width:99vw; height: 90vh;  font-size: 3vw;display: flex; justify-content: center; align-items: center; text-align: center;flex-direction: column;  font-family: gilroy; font-size: 3.5vw;'>The temperature in <b style='color:#F903FE; margin-top: 2vw;'>" +
          querry +
          " is " +
          team +
          "  *C</b><br> The Weather discription is <b style='color:#F903FE; margin-top: 2vw;'> " +
          discription +
          " </b></p>"
      );
    });
  });
});

// res.send("<p>The temperature in <b>"+querry +" is "+ team +" </b> degree celcius,<br> The Weather discription is <b> " +discription+" </b></p>")

/* GET home page. */

module.exports = router;
