class Hand {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  show(){
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 15, 15);
  }
  move(){
    this.y -= 5;
  }
  collide(corona){
    let d = dist(this.x, this.y, corona.x, corona.y);
    if(d < 15.5){
      return true;
    }
    else{
      return false;
    }
  }
}
