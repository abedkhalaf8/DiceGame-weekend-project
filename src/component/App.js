import './App.css';

import Players from './Game_players';
import React from 'react';
import Twodice from './two_dice';

export default class App extends React.Component {
   state = {
        player1: 0,
        player2: 0,
        player1_score:0,
        player2_score:0,
        projectTitle: 'Dice Game - Weekend Project with ReactJS'
     }
    result = (current_score) => {
         this.setState({player1: current_score})
   }
   player_score = (score) => {
       this.setState({player1_score: score});
       this.setState({projectTitle:"mmmmmmmmmm i need to fix this"})
   }
    render() {
        return (
             <div>
                 <div className="project-title">
                      <div className="row">
                      <div className="col-md-12 text-center">
                       <h3 className="animate-charcter">{this.state.projectTitle}</h3>
                     </div>
                  </div>
               </div>
                 <div className='GameBoard'>
                      <Players score={this.state.player1_score} current_score={this.state.player1} />
                      <Twodice score={this.player_score} current_score={this.result}/>
             </div>
                  <p>MADE BY ABED KHALAF</p>
             </div>
         )
     }
}


// The following exercise contains the following subjects:
// ● JSX
// ● Props
// ● State
// ● User Input

// Add an input field where players can set the winning score, so that they
// can change the predefined score of 10
// 1-  2 players in the game, one the right side and the another one in the left side
// 2- BUTTON FOR the roll dice
// 3- BUTTON FOR the hold value of the roll dice if the player want to
// 4- 2 labels for every side to show the corrent value 
// 5- 2 labels for two players to show the score under the name of the player
// 6- TEXT INPUT FOR THE FINAL SCOURE;
// 7- BUTTON for the NEW GAME.


// HOW MUCH COMPONENT DO I NEED 
// 1- APP.JS FILE IT'S THE MAIN FILE FOR THE WHOLE APP
// 2- LOGIC.JS a file containing the logic of how the game will work
// 3- MAYBE A FILE FOR THE 3 BUTTONS AND INPUT 
// 4-