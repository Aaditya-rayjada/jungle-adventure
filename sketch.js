var canvas;
var backgroundImage,bgImg
var database;
var form,player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/jungle.jpg");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}