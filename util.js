function Util() {
    
    this.loadImage = function(url) {
        return new Promise(resolve => {
            const img = new Image();
            img.addEventListener('load', () => {
                resolve(img);
            });
            img.src = url;
        });
    }

    this.draw = function(url, x, y) {
        this.loadImage(url)
        .then(img => {
            ctx.drawImage(img, x, y);
        });
    }
}
