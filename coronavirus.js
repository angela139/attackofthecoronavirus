
class Corona {
  constructor(){
    this.x = random(0, displayWidth);
    this.y = random(0, 150);
  }
  show(){
    image(covid, this.x, this.y, 100, 100);
  }
  move(){
    this.y += 1;
  }
}
