
export function drawStrokeOrder(strokeOrder) {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "black";
  ctx.font = "30px Arial";

  // Draw each radical stroke (this is a simple example; real stroke order would need detailed paths)
  strokeOrder.forEach((stroke, index) => {
    ctx.fillText(stroke, 20, 40 + (index * 40));
  });

  document.getElementById("stroke-order").appendChild(canvas);
}

// drawStrokeOrder(radicalData[word].strokeOrder);
