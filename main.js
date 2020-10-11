const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 100; // Your width here!
canvas.height = 100; // Your height here!

var util = new Util();
// Util.draw(url, x, y) draws img.

function update() {

  // This Will Be Called Every Frame.
  
  requestAnimationFrame(update);
}

update();
