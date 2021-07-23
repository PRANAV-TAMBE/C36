var canvas,backgroundImg;
var form,game,player;
var gameState=0;
var playerCount;
var database;

function setup(){

canvas=createCanvas(550,550);
database=firebase.database();
game=new Game();
game.getState();
game.startGame();


}

function draw(){




}













