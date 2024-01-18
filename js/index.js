let slider = document.getElementById("slider");
let investSum = document.getElementById("investSum");
let terraHesh = document.getElementById("terraHesh");

noUiSlider.create(slider, {
  start: 9000,
  step: 1000,
  connect: "lower",
  range: {
    min: 0,
    max: 25000,
  },
});

slider.noUiSlider.on("update", function (values, handle) {
  investSum.innerHTML = Math.round(values[handle]) + "$";
});

slider.noUiSlider.on("update", function (values, handle) {
  terraHesh.innerHTML = values[handle] / 1000;
});

let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

leftBtn.onclick = active;
rightBtn.onclick = active;

function active() {
  leftBtn.classList.toggle("calculator__button_active-btn");
  rightBtn.classList.toggle("calculator__button_active-btn");
}
