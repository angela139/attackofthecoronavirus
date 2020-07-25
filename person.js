function preload() {
  avatar = loadImage('assets/avatar.png');
  covid = loadImage('assets/coronavirus.png');
  hand_sanitizer = loadImage('assets/hand_sanitizer.png');
  
}

class Person {
  constructor(){
    this.x = width / 2;
  }
  
  show() {
    image(avatar, this.x, height - 80, 80, 80);
    image(hand_sanitizer, this.x + 50, height - 60, 40, 40);
  }
  move() {
    if (keyIsDown(RIGHT_ARROW)){
      this.x += 7;
       }
      if (keyIsDown(LEFT_ARROW)){
      this.x -= 7;
      }

  }
 
}
