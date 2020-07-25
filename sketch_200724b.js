let gameover;

function preload() {
  gameover = loadImage('gameoverimage.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(0);

  //this the outline thingy
  var rect_width = 500;
  var rect_height = 500;
  fill(255);
  rect((displayWidth/2) - (rect_width/2), (displayHeight/2) - (rect_height/2), rect_width, rect_height, 20);

  //this the gameover text
  image(gameover, (displayWidth/2) - (450/2), 140, 450, 275);  

  //this the score text
  score();
  //this the highscore text
  highscore();

  //button
  f_button();
}

function score() {
  var score_x = (displayWidth/2) - (450/2) + 25;
  var score_y = 400;
  fill(0);
  text('score', score_x, score_y);
  textSize(50);
}

function highscore() {
  var highscore_x = (displayWidth/2) + (450/2) - 125;
  var highscore_y = 400;
  fill(0);
  text('best', highscore_x, highscore_y);
  textSize(50);
}

function f_button() {
  button = createButton('RETRY');
  button.mousePressed(change_game);
  button.position((displayWidth/2) - 125, 570);
  button.size(250, 75);
  button.style("background-color","#D3D3D3");
  button.style("color","#fff");
  button.style("font-size","20px");
}

function change_game() {
  let val = random(255);
  background(val);
}
