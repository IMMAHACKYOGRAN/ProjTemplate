const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 100;
canvas.height = 100;

function loadImage(url) {
    return new Promise(resolve => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.src = url;
    });
}

function draw(url, x, y) {
    loadImage(url)
    .then(img => {
        ctx.drawImage(img, x, y);
    });
}

function update() {
  requestAnimationFrame(update);
}

update();
