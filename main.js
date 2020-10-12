const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400; // Your width here!
canvas.height = 400; // Your height here!
var width = canvas.width,
    height = canvas.height

var util = new Util(); // util.draw(url, x, y) draws img. 

function update() {
  
  requestAnimationFrame(update);
}

update();
