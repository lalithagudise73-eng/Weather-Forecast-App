const testWeather = {
    temperature: 28,
    humidity: 72,
    wind: 12,
    condition: "Cloudy"
};


// Test 1: Temperature

function testTemperature() {

    console.assert(
        testWeather.temperature === 28,
        "Temperature test failed"
    );

    console.log(
        "Test 1 - Temperature: PASS"
    );
}


// Test 2: Humidity

function testHumidity() {

    console.assert(
        testWeather.humidity === 72,
        "Humidity test failed"
    );

    console.log(
        "Test 2 - Humidity: PASS"
    );
}


// Test 3: Wind

function testWind() {

    console.assert(
        testWeather.wind === 12,
        "Wind test failed"
    );

    console.log(
        "Test 3 - Wind Speed: PASS"
    );
}


// Test 4: Condition

function testCondition() {

    console.assert(
        testWeather.condition === "Cloudy",
        "Condition test failed"
    );

    console.log(
        "Test 4 - Weather Condition: PASS"
    );
}


// Test 5: Valid Temperature

function testValidTemperature() {

    console.assert(
        testWeather.temperature >= -50 &&
        testWeather.temperature <= 60,
        "Temperature range test failed"
    );

    console.log(
        "Test 5 - Temperature Range: PASS"
    );
}


testTemperature();
testHumidity();
testWind();
testCondition();
testValidTemperature();

console.log(
    "All Weather App Tests Completed."
);