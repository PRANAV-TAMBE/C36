class Game{

constructor(){

}

getState(){

var gameRef=database.ref('gameState');
gameRef.on("value",function(data){
gameState=data.val();
})
}

updateGame(state){
database.ref('/').update({
gameState:state
})
}

startGame(){
if(gameState===0){
form=new Form();
form.display();
player=new Player();
player.getCount();

}
    
}

}