class HeartService {
  constructor() {
    this.heartContainer = document.getElementById('heart-container') || this._createContainer();
    this.heartsPerTap = 1;
    this.intervalId = null;
    document.addEventListener('click', this._createHearts.bind(this));
  }

  _createContainer() {
    const container = document.createElement('div');
    container.id = 'heart-container';
    document.body.appendChild(container);
    return container;
  }

  setHeartNumber(count) {
    this.heartsPerTap = count;
  }

  startEndlessSpawning(frequency) {
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this._createHearts(), frequency);
  }

  stopEndlessSpawning() {
    if (this.intervalId) {
      clearInterval(this.intervalId); 
      this.intervalId = null;
    }
  }

  _createHearts() {
    for (let i = 0; i < this.heartsPerTap; i++) {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight - (Math.random() * 50);
      this._spawnHeart(x, y);
    }
  }

  _spawnHeart(x, y) {
    const heart = new Heart(x, y);
    this.heartContainer.appendChild(heart.element);

    heart.element.addEventListener('animationend', () => {
      heart.element.remove();
    });
  }
}

class Heart {
  constructor(x, y) {
    this.element = document.createElement('div');
    this.element.innerHTML = '&#10084;';
    this.element.className = 'heart';
    this.element.style.position = 'absolute';
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
    this.element.style.animation = 'riseAndFade 3s linear forwards';
  }
}