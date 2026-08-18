# 🌦️ Weather Forecast App

## Introduction

The Weather Forecast App is a web-based application developed
using HTML, CSS and JavaScript.

The application allows users to enter a city name and view
weather information such as temperature, humidity, wind speed,
weather condition and a five-day forecast.

## Objectives

- Display weather information.
- Provide a simple weather search interface.
- Display temperature and humidity.
- Display wind speed and weather conditions.
- Display a multi-day forecast.
- Demonstrate JSON data processing.
- Implement frontend testing and simulation.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- VS Code
- Git
- GitHub

## Features

1. City search
2. Current temperature
3. Humidity information
4. Wind speed
5. Weather condition
6. Five-day forecast
7. Responsive design
8. JSON-based weather data
9. Testbench
10. Simulation

## Project Structure

Weather-Forecast-App/

├── README.md
├── index.html
├── style.css
├── script.js
│
├── data/
│   └── weather_data.json
│
├── testbench/
│   └── test.js
│
└── simulation/
    └── simulation_results.txt

## How to Run

1. Open the project folder in VS Code.
2. Open the folder using a local development server.
3. Open index.html in the browser.
4. Enter a supported city such as Hyderabad.
5. Click Search.
6. View the current weather and five-day forecast.

## Testbench

The testbench verifies:

- Temperature
- Humidity
- Wind speed
- Weather condition
- Temperature range

Open the browser Developer Console and run:

testbench/test.js

Expected output:

Test 1 - Temperature: PASS
Test 2 - Humidity: PASS
Test 3 - Wind Speed: PASS
Test 4 - Weather Condition: PASS
Test 5 - Temperature Range: PASS

All Weather App Tests Completed.

## Simulation

The simulation demonstrates:

City Input
     ↓
Weather Data Retrieval
     ↓
JSON Processing
     ↓
Current Weather Display
     ↓
Five-Day Forecast

## Future Enhancements

- Connect to a live weather API.
- Add automatic current-location detection.
- Add hourly forecasts.
- Add weather icons.
- Add temperature charts.
- Add dark mode.
- Add multiple-unit support.
- Add severe-weather notifications.

## Security Note

This project is an educational prototype. If a live weather
API is added, API credentials should not be exposed in
client-side code.

## Conclusion

The Weather Forecast App demonstrates how HTML, CSS,
JavaScript and JSON can be combined to create a useful
weather-information application.

The project also demonstrates software testing and simulation
for verifying application functionality.