let diameter = document.getElementById("diameter");
let radius = document.getElementById("radius");
let area = document.getElementById("area");
let circumstances = document.getElementById("circumstances");

// buttons reset and calculate

let resetButton = document.getElementById("reset-button");
let calculateButton = document.getElementById("calculate-button");

resetButton.addEventListener("click", () => {
  diameter.value = "";
  radius.textContent = "";
  area.textContent = "";
  circumstances.textContent = "";
});

calculateButton.addEventListener("click", () => {
  let diameterValue = diameter.value;
  let radiusValue = diameterValue / 2;
  let areaValue = Math.PI * Math.pow(radiusValue, 2);
  let circumstancesValue = 2 * Math.PI * radiusValue;

  radius.textContent = radiusValue;
  area.textContent = areaValue;
  circumstances.textContent = circumstancesValue;

  if (diameterValue.trim() === "") {
    alert("Box is empty");
  }
});
