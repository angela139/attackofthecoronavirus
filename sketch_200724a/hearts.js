
class Heart {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  show(){
    image(heartv, this.x, this.y, 80, 80);
  }
  delete(){
    this.toDelete = true;
  }
  
}
