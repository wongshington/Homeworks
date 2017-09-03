document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("mycanvas");
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 400); //rectangle at position 10, 10 with width of 55 and height of 50

  ctx.beginPath();
  ctx.arc(400, 300, 20, 0, 2 * Number(Math.PI), true); //x, y, radius, startAngle, endAngle, anticlockwise
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fil();
});
