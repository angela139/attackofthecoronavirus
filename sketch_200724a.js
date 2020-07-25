let person;
let coronas = [];
const numcorona = 20;
let drops = [];
function setup() {
  createCanvas(displayWidth, displayHeight - 200);
  person = new Person();
  for(let i = 0; i < numcorona; i++){
    coronas[i] = new Corona();
  }
}

function draw() {
  background(0);
  person.show();
  person.move();
  for(let i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].move();
    for(let c = 0; c < coronas.length; c++){
      if(drops[i].collide(coronas[c])){
        console.log("Hey");
      }
    }
  }
  for(let i = 0; i < coronas.length; i++){
    coronas[i].show();
    coronas[i].move();
  }
  
}

function keyPressed(){
    if (keyCode === 32){
      let sanitize = new Hand(person.x + 70, height - 60);
      drops.push(sanitize);
    }
    return false;
  }
