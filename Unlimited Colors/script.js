let startInterval = null;

document.getElementById("start").addEventListener("click", () => {
  startInterval = setInterval(changeColors, 2000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(startInterval);
});

function changeColors() {
  const hex = "0123456789";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 10)];
  }
  document.body.style.backgroundColor = color;
}