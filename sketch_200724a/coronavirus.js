
class Corona {
  constructor(){
    this.x = random(0, displayWidth);
    this.y = random(0, 150);
  }
  show(){
    image(covid, this.x, this.y, 80, 80);
  }
  move(){
    this.y += 0.5;
  }
  delete(){
    this.toDelete = true;
  }
}
