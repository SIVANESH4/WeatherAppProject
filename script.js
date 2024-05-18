const ApiKey = "7466b8cecdf797b99ca0527aefcd3b7e";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=tamilnadu&appid=7466b8cecdf797b99ca0527aefcd3b7e&units=metric";

async function fetchData(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey + "&units=metric");
    const data = await response.json();
    console.log(data);
    if (response.status == 404) {
        err.style.display = "block";
        content.style.display = "none";
        deflt.style.display = "block";
    }
    else {
        document.getElementById("wind").innerHTML = data.wind.speed + "km/h"
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".celcius").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city-name").innerHTML = data.name;
        if (data.weather[0].main == "Clouds") {
            weatherimg.src = "/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherimg.src = "/images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherimg.src = "/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherimg.src = "/images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherimg.src = "/images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherimg.src = "/images/snow.png";
        }
        content.style.display = "block";
        err.style.display = "none";
    }


}

const city = document.querySelector(".search-bar");
const btn = document.querySelector(".search-icon");
const err = document.querySelector(".error");
const weatherimg = document.querySelector(".images");
const deflt = document.querySelector(".default-container");
const content = document.querySelector(".whole-section");
btn.addEventListener("click", () => {
    fetchData(city.value);
    deflt.style.display = "none";
});



