class Projectile {
  constructor() {
    this.r = 15;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 8;
  }

  display() {
    image(projectileImg, this.x, this.y, this.r, this.r);
  }

  move() {
    this.y -= this.speed;
  }
}
