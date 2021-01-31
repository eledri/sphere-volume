function validateForm() {
  const getRadiusBox = document.getElementById("getRadiusBox");
  const getRadius = getRadiusBox.value;
  const drawingCanvas = document.getElementById("drawingCanvas");

  getRadiusBox.style.backgroundColor = "";

  if (isNaN(getRadius)) {
    alert("Please Enter a valid number ");
    getRadiusBox.style.backgroundColor = "pink";
    getRadiusBox.focus();
    return false;
  } else if (getRadius == "") {
    alert("Please Enter a number in Radius Box ");
    getRadiusBox.style.backgroundColor = "pink";
    getRadiusBox.focus();
    return false;
  } else if (getRadius <= 0) {
    alert("Please Enter Positive Number (Higher then Zero) ");
    getRadiusBox.style.backgroundColor = "pink";
    getRadiusBox.focus();
    return false;
  } else if (getRadius > drawingCanvas.width / 2) {
    alert(
      "Radius dimensions is oversize, Enter Radius ( from 1 to " +
        drawingCanvas.width / 2 +
        " )"
    );
    getRadiusBox.style.backgroundColor = "pink";
    getRadiusBox.focus();
    return false;
  }

  canvasDrawing();
  calculateVolume();
}

function calculateVolume() {
  let volume;
  let radius = document.getElementById("getRadiusBox").value;
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById("displayVolumeBox").innerHTML = volume;
}

function canvasDrawing() {
  const getRadiusBox = document.getElementById("getRadiusBox");
  const getRadius = getRadiusBox.value;
  const drawingCanvas = document.getElementById("drawingCanvas");
  const painter = drawingCanvas.getContext("2d");
  const canvasLimit = drawingCanvas.width / 2;
  painter.beginPath();
  painter.strokeStyle = "black";
  painter.arc(canvasLimit, canvasLimit, getRadius, 0, 2 * Math.PI); // x, y, radius, start-angle, end-angle
  painter.stroke(); // Do It
}

function clearCanvas() {
  const drawingCanvas = document.getElementById("drawingCanvas");
  const context = drawingCanvas.getContext("2d");
  context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
}

function clearCanvasOnCalculate() {
  const button = document.getElementById("calculateButton");
  let count = 0;
  button.addEventListener("click", function () {
    count++;
    if (count == 1) {
      clearCanvas();
      canvasDrawing();
    }
  });
}

function onLoadDrawCanvas() {
  const drawingCanvas = document.getElementById("drawingCanvas");
  const painter = drawingCanvas.getContext("2d");
  painter.beginPath();
  painter.strokeStyle = "black";
  const canvasLimit = drawingCanvas.width / 2;
  for (let i = 0; i < drawingCanvas.width / 2; i++) {
    painter.arc(canvasLimit, canvasLimit, i, 0, 2 * Math.PI); // x, y, radius, start-angle, end-angle
  }
  setTimeout(function () {
    painter.stroke();
  }, 100);
}

onLoadDrawCanvas();
clearCanvasOnCalculate();
