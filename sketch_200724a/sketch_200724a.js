let person;
let hearts = [];
let coronas = [];
let masks = [];
const numcorona = 100;
const nummask = 10;
let drops = [];
let score = 0;
let overlapping = false;

function setup() {
  createCanvas(displayWidth, displayHeight - 200);
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
  text("Score: " + score, 30, 57);
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
          score += 1;
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
          }
          
        }
        
        
      
    }
  
}

function keyPressed(){
    if (keyCode === 32){
      let sanitize = new Hand(person.x + 70, height - 60);
      drops.push(sanitize);
    }
    return false;
  }
