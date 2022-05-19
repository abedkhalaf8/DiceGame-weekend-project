import react from 'react';

// inside the gamelogic function i should put the game logic how it will work
const GameLogic = () => {





}

export default GameLogic;
// in this file we be the logic of the dice game


// Rules
// - The game has 2 players, playing in rounds.
// - In each turn, a player rolls 2 dices as many times as he wishes. (at
// least once)
// - Each result will get added to his temporary score. But if the player
// rolls a double six all his temporary score gets lost. And the turn
// goes to the next player
// - A player can choose to ‘Hold’, which means that his temporary
// score gets added to his global score. After that, its the next players
// turn. (A player must roll the dice once before holdin)



// Winner of the game: (One of two options)
// ● The first player to reach 100 points. (100 exactly not 101 and
// not 99)
// ● The opposing player passed 100 points in his total score