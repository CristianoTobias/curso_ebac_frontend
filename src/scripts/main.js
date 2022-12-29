 document.addEventListener("DOMContentLoaded", function(){
       

     // Access HTML elements
      let doorImage1 = document.querySelector("#door1");
      let doorImage2 = document.querySelector("#door2");
      let doorImage3 = document.querySelector("#door3");
      let startButton = document.querySelector("#start");
      let botDoorPath = "./imagens/robot.png";
      let beachDoorPath = "./imagens/beach.png";
      let spaceDoorPath = "./imagens/space.png";
      let closedDoorPath = "./imagens/closed_door.png";
    
      let numClosedDoors = 3;
      let openDoor1;
      let openDoor2;
      let openDoor3;
      let currentlyPlaying = true;
    
      // Define game logic to check doors, progress game, end game, and choose a random chore door
      function isClicked(door) {
         if (door.src.indexOf("closed_door.png") > 0) {
          return true;
        } else {
          return false;
        }
      }
    
      function isBot(door) {
        if (door.src.indexOf("robot.png") > 0) {
          return true;
        }
      }
    
      function gameOver(status) {
        if (status == "win") {
          startButton.innerHTML = "You win! Play again?";
        } else {
          startButton.innerHTML = "Game Over! Play again?";
        }
        currentlyPlaying = false;
      }
    
      function playDoor(door) {
        numClosedDoors--;
        if (numClosedDoors == 0) {
          gameOver("win");
        } else if (isBot(door)) {
          gameOver();
        }
      }
    
      function randomChoreDoorGenerator() {
        let choreDoor = Math.round(Math.random() * numClosedDoors);
    
        if (choreDoor == 0) {
          openDoor1 = botDoorPath;
          openDoor2 = beachDoorPath;
          openDoor3 = spaceDoorPath;
        } else if (choreDoor == 1) {
          openDoor2 = botDoorPath;
          openDoor3 = beachDoorPath;
          openDoor1 = spaceDoorPath;
        } else if (choreDoor == 2) {
          openDoor3 = botDoorPath;
          openDoor1 = beachDoorPath;
          openDoor2 = spaceDoorPath;
        }
      }
      doorImage1.onclick = () => {
        if (currentlyPlaying && isClicked(doorImage1)) {
          doorImage1.src = openDoor1;
          playDoor(doorImage1);
        }
      };
    
      doorImage2.onclick = () => {
        if (currentlyPlaying && isClicked(doorImage2)) {
          doorImage2.src = openDoor2;
          playDoor(doorImage2);
        }
      };
    
      doorImage3.onclick = () => {
        if (currentlyPlaying && isClicked(doorImage3)) {
          doorImage3.src = openDoor3;
          playDoor(doorImage3);
        }
      };
    
      startButton.onclick = () => {
         if (currentlyPlaying === false) {
          startRound();
        }
      };
    
      // Start a game round
      function startRound() {
        doorImage1.src = closedDoorPath;
        doorImage2.src = closedDoorPath;
        doorImage3.src = closedDoorPath;
        numClosedDoors = 3;
        startButton.innerHTML = "Good Luck!";
        currentlyPlaying = true;
        randomChoreDoorGenerator();
        
      }
    
      startRound();
      
 })    
