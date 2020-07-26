
class Corona {
  constructor(){
    this.x = random(100, displayWidth - 100);
    this.y = random(40, 250);
  }
  show(){
    image(covid, this.x, this.y, 50, 50);
  }
  move(){
    this.y += 1;
  }
  collide(person){
    let d = dist(this.x, this.y, person.x, person.y);
    if(d < 35){
      return true;
    }
    else{
      return false;
    }
  }
  delete(){
    this.toDelete = true;
  }
  reset(){
    this.x = random(100, displayWidth - 100);
    this.y = random(40, 250);
    
  }
}
