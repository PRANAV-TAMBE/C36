class Form{

constructor(){
   
}

display(){

var title= createElement('h1');
title.html("Car Racing Game");
 title.position(650,5);
 var input=createInput("Name");
 var button=createButton('Play');
 var greeting=createElement('h3');
   input.position(370,100);
   button.position(570,100); 

   button.mousePressed(function(){
input.hide();
button.hide();

var name=input.value();
greeting.html("Hello "+name);
greeting.position(370,100);

playerCount+=1;
player.update(name);
player.updateCount(playerCount);

   })


 
}

}