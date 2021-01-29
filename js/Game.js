class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   //put sprites here for trex/ground object
   trex1 = createSprite(300,600)
   trex1.addImage("trex1",trex1I)
   trex2 = createSprite(300,900)
   trex2.addImage("trex2",trex2I)
   trex = [trex1,trex2]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
  //image(trackI,0,-displayHeight*4,displayWidth,displayHeight*5)
      var display_position = 130;
      var x = 300;
      var y = 0;
      var index = 0;
      var trexIndex = 0;
      for(var plr in allPlayers){
        trexIndex=index;
        index+=1;
        x+=250
        y=allPlayers[plr].y
        trex[trexIndex].x=x;
        trex[trexIndex].y=y;
        /*if (plr === "player" + player.index){
        stroke(5);
        fill("green");
        ellipse(x,y,100,100)
        cars[trexIndex].shapeColor="blue"
        camera.position.x=displayWidth/2;
        camera.position.y=cars[carIndex].y;
        }*/
      }
    }
    //console.log(player.index)
    if(player.index === 1 ){
      if(keyDown("space")){

      console.log("inside jump if block")
      trex[player.index-1].y=trex[player.index-1].y-175;
      }
      }
      if(player.index === 2 ){
        if(keyDown("space")){
  
        console.log("inside jump if block")
        trex[player.index-1].y=trex[player.index-1].y-200;
        }
        }
      //console.log("player1 velocity" + trex[player.index-1].velocityY)
      //console.log(trex2.velocityY)


    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>=5100 && gameState === 1){
      console.log("Game Over");
      player.rank +=1
      gameState=2;
//      this.update(2);
      player.updateCarsAtEnd(player.rank);
    } */
        drawSprites()
  }
    end(){
      console.log("Game Over");
    //  console.log("Your rank is :"+ player.rank);
      form.restart();
    //  alert("game over")
    //  swal
    }
}