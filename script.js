let numberOfPlayers = prompt("Enter the no of players");
let arrayOfPlayers = [];

numberOfPlayers = Number.parseInt(numberOfPlayers);

function playersList(numberOfPlayers){

 for(i=0; i<numberOfPlayers; i++){
  let playersLeft = numberOfPlayers - (i+1);
  if(playersLeft > 0){
   playersLeft = ` "No of players left is  ${playersLeft}"`
  }
  else{
   playersLeft = ` "Enter the last players name "`
  }
  let players = prompt(`Enter the ${(i+1)}'st player name :-  ${playersLeft}`);
  arrayOfPlayers.push(players);
 }

 let randomNumber = Math.floor(Math.random()*numberOfPlayers);
 alert(`The winner of today's challenge is ${arrayOfPlayers[randomNumber]} `);
}

playersList(numberOfPlayers);
