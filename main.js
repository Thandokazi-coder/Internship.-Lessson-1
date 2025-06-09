document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", convertTemperature);
});


function convertTemperature() {
  // Get input value and selected option
  let degrees = document.getElementById('degrees').value;
  let type = document.getElementById('type').value;
  let resultField = document.getElementById('results');

  // Convert input to number 
  degrees = Number(degrees);

  // Check for valid input 
  if (!degrees && degrees !== 0) {
    resultField.value = "Please enter a number.";
    return;
  }

  // Convert based on selected type 
  let result = '';

  if (type === "fahrenheit") {
    result = (degrees * 9) / 5 + 32;
    resultField.value = `${result.toFixed(2)} °F`;
  } else if (type === "kelvin") {
    result = degrees + 273.15;
    resultField.value = `${result.toFixed(2)} K`;
  } else if (type === "celsius") {
    resultField.value = `${degrees.toFixed(2)} °C`;
  } else {
    resultField.value = "Please select a unit.";
  }
}
