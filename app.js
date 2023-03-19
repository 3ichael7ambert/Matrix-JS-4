// Get the canvas element and create a 2D drawing context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions∑
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the matrix characters
var matrixCharacters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]|;':\",./<>?`~";

// Define the matrix columns
var columns = canvas.width / 20;

// An array to store the matrix drops
var drops = [];

// Create the matrix drops
for (var i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height);
}

// Draw the matrix animation
function drawMatrix() {
  // Set the canvas background color to black
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set the font and color for the matrix characters
  ctx.font = "15px monospace";
  ctx.fillStyle = "#0F0";
  
  // Loop through the matrix columns
  for (var i = 0; i < columns; i++) {
    // Get a random matrix character
    var matrixCharacter = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
    
    // Draw the matrix character at the current position
    ctx.fillText(matrixCharacter, i * 20, drops[i] * 20);
    
    // Move the matrix drop down by 1
    drops[i]++;
    
    // If the matrix drop is outside the canvas, reset it to the top
    if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

// Call the drawMatrix function every 50 milliseconds
setInterval(drawMatrix, 50);
