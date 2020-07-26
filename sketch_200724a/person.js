
class Person {
  constructor(){
    this.x = width / 2;
    this.y = height - 80;
  }
  
  show() {
    image(avatar, this.x, this.y, 80, 80);
    image(hand_sanitizer, this.x + 50, this.y + 20, 40, 40);
  }
  move() {
    if (keyIsDown(RIGHT_ARROW)){
      this.x += 10;
       }
      if (keyIsDown(LEFT_ARROW)){
      this.x -= 10;
      }

  }
 
}
