class Mask {
  constructor(){
    this.x = random(100, displayWidth - 100);
    this.y = random(40, 200);
  }
  show(){
    image(masksc, this.x, this.y, 50, 50);
  }
  move(){
    this.y += 1;
  }
  collide(person){
    let d = dist(this.x, this.y, person.x, person.y);
    if(d < 40){
      return true;
    }
    else{
      return false;
    }
  }
  delete(){
    this.toDelete = true;
  }
}
