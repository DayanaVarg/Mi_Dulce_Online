function Carousel() {
    this.track = document.getElementById('track');
    this.carruselList = document.getElementById('carrusel-list');
    this.carruselWidth = document.querySelector('.carrusel').offsetWidth;
    this.listWidth = this.carruselList.offsetWidth;
    this.leftPosition = 0;

    this.prevButton = document.getElementById('button-prev');
    this.nextButton = document.getElementById('button-next');

    this.prevButton.addEventListener('click', this.prev.bind(this));
    this.nextButton.addEventListener('click', this.next.bind(this));
}

Carousel.prototype.prev = function () {
    if (this.leftPosition < 0) {
        this.leftPosition += this.carruselWidth;
        this.updatePosition();
    }
};

Carousel.prototype.next = function () {
    if (this.leftPosition > -(this.track.offsetWidth - this.listWidth)) {
        this.leftPosition -= this.carruselWidth;
        this.updatePosition();
    }
};