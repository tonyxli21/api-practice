const city = "New York";

// Can also include another API that gets specific user location with a dynamic value of city

$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=9ad90e2c386e0e0e6dc75e2f407215a8",
  function(data) {
    console.log(data);

    let icon =
      "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    let temp = Math.floor(data.main.temp);

    let weather = data.weather[0].main;
    // Add icon inside image in index.html
    // jQuery notation?
    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weather);
    // console.log(icon);
  }
);
