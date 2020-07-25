let person;
let heart = [];
let coronas = [];
let masks = [];
const numcorona = 50;
const nummask = 10;
let drops = [];
let score = 0;
let overlapping = false;

function setup() {
  createCanvas(displayWidth, displayHeight - 200);
  person = new Person();
  for(let i = 0; i < 3; i++){
    heart[i] = new Heart(width - i * 30 - 80, 0);
  }
  
  for(let i = 0; i < numcorona; i++){
    let corona = new Corona();
    coronas.push(corona);
    
  }
  for(let i = 0; i < nummask; i++){
    let mask = new Mask();
    masks.push(mask);
    
  }
}

function draw() {
  background(0);
  fill(255);
  textFont(font);
  textSize(30);
  text("Lives:", width - 220, 57);
  text("Score: " + score, 30, 57);
  person.show();
  for (let i = 0; i < heart.length; i++){
    heart[i].show();
  }
  person.move();
  for(let i = 0; i < coronas.length; i++){
    coronas[i].show();
    coronas[i].move();
    if (coronas[i].y > height){
      coronas[i].reset();
    }
    
  }
  for(let i = 0; i < masks.length; i++){
    masks[i].show();
    masks[i].move();
    
  }
  for(let i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].move();
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
  for(let p = 0; p < coronas.length; p++){
      if(coronas[p].collide(person)){
          coronas[p].delete();
          if (coronas[p].toDelete) {
            coronas.splice(p, 1);
          }
          for (let i = 0; i < heart.length; i++){
            heart[i].delete();
            if(heart[i].toDelete){
              heart.splice(i, 1);
            }
          }
        }
        
      
    }
    for(let m = 0; m < masks.length; m++){
      if(masks[m].collide(person)){
          masks[m].delete();
          if (masks[m].toDelete) {
            masks.splice(m, 1);
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
