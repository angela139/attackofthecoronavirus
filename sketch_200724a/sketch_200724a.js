let person;
let hearts = [];
let coronas = [];
let masks = [];
let numcorona = 100;
let nummask = 10;
let drops = [];
let current_score = 0;
let high_score = 0;

function preload() {
  avatar = loadImage('assets/avatar.png');
  covid = loadImage('assets/coronavirus.png');
  hand_sanitizer = loadImage('assets/hand_sanitizer.png');
  heartv = loadImage('assets/heart.png');
  masksc = loadImage('assets/mask.png');
  gameover = loadImage('assets/gameoverimage.png');
  font = loadFont('assets/slkscr.ttf');
}

function setup() {
  createCanvas(displayWidth, displayHeight - 200);
  resetS();
}
function resetS(){
  person = new Person();
  // Create Hearts
  for(let i = 0; i < 3; i++){
    let heart = new Heart(width - i * 30 - 80, 0);
    hearts.push(heart);
  }
  // Create Coronavirus
  for(let i = 0; i < numcorona; i++){
    let corona = new Corona();
    coronas.push(corona);
    
  }
  // Create Masks
  for(let i = 0; i < nummask; i++){
    let mask = new Mask();
    masks.push(mask);
    
  }
}

function draw() {
  background(0);
  // Create Lives and Score
  fill(255);
  textFont(font);
  textSize(30);
  text("Lives:", width - 220, 57);
  text("Score: " + current_score, 30, 57);
  person.show();
  // Show Hearts
  for (let i = 0; i < hearts.length; i++){
    hearts[i].show();
  }
  person.move();
  // Show Coronavirus
  for(let i = 0; i < coronas.length; i++){
    coronas[i].show();
    coronas[i].move();
    if (coronas[i].y > height){
      coronas[i].reset();
    }
    
  }
  // Show Masks
  for(let i = 0; i < masks.length; i++){
    masks[i].show();
    masks[i].move();
    if (masks[i].y > height){
      masks[i].reset();
    }
    
  }
  // Show Hand Sanitizer Drops
  for(let i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].move();
    // If drops hit coronavirus, coronavirus & drops disappear while adding 1pt to score
    for(let c = 0; c < coronas.length; c++){
      if(drops[i].collide(coronas[c])){
        coronas[c].delete();
        drops[i].delete();
        if (coronas[c].toDelete) {
          coronas.splice(c, 1);
          current_score += 1;
        }
      }
    }
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
    
  }
  // if coronavirus hits person, person loses a heart.
  for(let p = 0; p < coronas.length; p++){
      if(coronas[p].collide(person)){
          coronas[p].delete();
          if (coronas[p].toDelete) {
            coronas.splice(p, 1);
          }
            
          hearts.splice(0, 1);
            
          
        }
             
    }
  // if mask hits person, person regains all hearts.
  for(let m = 0; m < masks.length; m++){
    if(masks[m].collide(person)){
        masks[m].delete();
        if (masks[m].toDelete) {
          masks.splice(m, 1);
        }
        for(let i = 0; i < 3; i++){
          let heart = new Heart(width - i * 30 - 80, 0);
          hearts.push(heart);
          if (hearts.length > 3){
            hearts.splice(0, 1);
          }
        }
        
      }
      
  }
  // If there are less than 10 covids on the screen, adds the previous start amount + 50 more to keep game going.
  if (coronas.length < 10){
      numcorona += 50;
      for(let i = 0; i < numcorona; i++){
        let corona = new Corona();
        coronas.push(corona);
        
      }
  }
  // If the person has no more hearts, game over.
  if (hearts.length == 0){
    hearts.splice(0, 1);
    noLoop();
    clear();
    background(0);
    //this is the outline box
    let rect_width = 500;
    let rect_height = 500;
    fill(255);
    rect((displayWidth/2) - (rect_width/2), (displayHeight/2) - (rect_height/1.5), rect_width, rect_height, 20);
  
    //this the gameover text
    image(gameover, (displayWidth/2) - (450/2), 140, 450, 275);  
  
    //this the score text
    scores();
    //this the highscore text
    highscore();
  
    //button
    f_button(); 
  
  }
  
}

function keyPressed(){
    if (keyCode === 32){
      let sanitize = new Hand(person.x + 70, height - 60);
      drops.push(sanitize);
    }
    return false;
  }

function scores() {
  let score_x = (displayWidth/2) - (450/2) + 25;
  let score_y = 400;
  fill(0);
  textSize(50);
  text('SCORE', score_x, score_y);
  text(current_score, score_x, score_y + 50);
}

function highscore() {
  let highscore_x = (displayWidth/2) + (450/2) - 175;
  let highscore_y = 400;
  fill(0);
  text('best', highscore_x, highscore_y);
  if (current_score > high_score){
    text(current_score, highscore_x, highscore_y + 50);
    high_score = current_score;
  }
  else{
    text(high_score, highscore_x, highscore_y + 50);
  }
}

function f_button() {
  button = createButton('RETRY');
  button.mousePressed(change_game);
  button.position((displayWidth/2) - 125, 570);
  button.size(250, 75);
  button.style("background-color","#D3D3D3");
  button.style("color","#fff");
  button.style("font-size","20px");
  button.style("font-family", "Courier");
}

function change_game() {
  clear();
  current_score = 0;
  coronas.length = 0;
  masks.length = 0;
  drops.length = 0;
  numcorona = 100;
  resetS();
  button.hide();
  loop();
  
}

  
