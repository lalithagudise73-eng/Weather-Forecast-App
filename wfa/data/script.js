let weatherData = {};


// Load weather data
fetch("data/weather_data.json")
    .then(response => response.json())
    .then(data => {
        weatherData = data;
    })
    .catch(error => {
        console.error("Error loading weather data:", error);
    });


function searchWeather() {

    const city =
        document
            .getElementById("cityInput")
            .value
            .trim();

    const cityKey =
        Object.keys(weatherData).find(
            key => key.toLowerCase() === city.toLowerCase()
        );

    if (!cityKey) {

        alert(
            "City not available in the sample data."
        );

        return;
    }

    const weather = weatherData[cityKey];

    document.getElementById(
        "cityName"
    ).innerText = cityKey;

    document.getElementById(
        "temperature"
    ).innerText =
        weather.temperature + " °C";

    document.getElementById(
        "humidity"
    ).innerText =
        weather.humidity + "%";

    document.getElementById(
        "wind"
    ).innerText =
        weather.wind + " km/h";

    document.getElementById(
        "condition"
    ).innerText =
        weather.condition;

    displayForecast(weather.forecast);
}


function displayForecast(forecast) {

    const container =
        document.getElementById(
            "forecast"
        );

    container.innerHTML = "";

    forecast.forEach(day => {

        const card =
            document.createElement("div");

        card.className =
            "forecast-card";

        card.innerHTML = `
            <h3>${day.day}</h3>
            <p>${day.temperature} °C</p>
            <p>${day.condition}</p>
        `;

        container.appendChild(card);
    });
}