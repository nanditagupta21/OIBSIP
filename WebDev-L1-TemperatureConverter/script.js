
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (temperatureInput.value.trim() === "" || !Number.isFinite(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    // Convert the input temperature into Celsius first.
    let celsius;

    if (from === "celsius") {
        celsius = temperature;
    } else if (from === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Convert Celsius into the selected target unit.
    let convertedTemperature;

    if (to === "celsius") {
        convertedTemperature = celsius;
    } else if (to === "fahrenheit") {
        convertedTemperature = (celsius * 9 / 5) + 32;
    } else {
        convertedTemperature = celsius + 273.15;
    }

    if (from !== "kelvin" && celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (from === "kelvin" && temperature < 0) {
        result.textContent = "Kelvin temperature cannot be negative.";
        return;
    }

    const symbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };

    result.textContent =
        `${temperature} ${symbols[from]} = ${convertedTemperature.toFixed(2)} ${symbols[to]}`;
});
