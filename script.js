document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "280a0a168aeb4a3496f30316251307";
    const serachBox = document.querySelector(".search input")
    const searchbtn = document.querySelector(".search button")


    async function checkWeather(city) {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.error && data.error.code === 1006) {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        } else {
            console.log(data);

            document.querySelector(".city").innerHTML = data.location.name
            document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C"
            document.querySelector(".humidity").innerHTML = data.current.humidity + "%"
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h"

            document.querySelector(".Weather_Icon").src = "https:" + data.current.condition.icon;

            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none"
        }

    }

    searchbtn.addEventListener("click", () => {
        checkWeather(serachBox.value);
    })
});
