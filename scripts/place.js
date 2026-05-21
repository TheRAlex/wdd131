document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

// =====================
// Wind Chill Calculation
// =====================

// Static values — match what's displayed in HTML
const temperature = 10;  // °C
const windSpeed = 18;    // km/h

// Formula for Celsius/metric
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Only calculate if conditions are met
// Metric conditions: temp <= 10°C AND wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("windchill").innerHTML = 
    calculateWindChill(temperature, windSpeed) + "°C";
} else {
  document.getElementById("windchill").innerHTML = "N/A";
}   