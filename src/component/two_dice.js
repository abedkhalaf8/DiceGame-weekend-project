import './two_dice.css'
import './Game_buttons.css'

import Dice1 from './imgs/dice1.png';
import Dice2 from './imgs/dice2.png';
import Dice3 from './imgs/dice3.png';
import Dice4 from './imgs/dice4.png';
import Dice5 from './imgs/dice5.png';
import Dice6 from './imgs/dice6.png';
import React from 'react';

class Twodice extends React.Component {
    state = {
    img1: Dice1,
    img2: Dice2,
    Current_Score:0,
    Score: 0,
    final_score: 0,
    player1: 0,
    player2: 0,
    switchPlayer : 'Player1',
    player1_score: 0,
    player1_current_score: 0,
    player2_score: 0,
    player2_current_score: 0
}
  rollTheDice = () => {
   const dice1 = Math.floor(Math.random() * 6) + 1;
   const dice2 = Math.floor(Math.random() * 6) + 1;
   const array = ["",Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
   this.setState({img1: array[dice1]});
   this.setState({img2: array[dice2]});
   if ( 6 === dice1 && 6 === dice2){
     console.log('6!!')
       this.setState({Current_Score: 0});
       this.props.current_score(this.state.Current_Score);
         if (this.state.switchPlayer === 'Player1'){
          this.setState({switchPlayer : 'Player2'});
         } else {
         this.setState({switchPlayer : 'Player1'});
          }
   } else {
   this.setState({Current_Score: this.state.Current_Score + dice1 + dice2});
   this.props.current_score(this.state.Current_Score);
    }
  this.player1OrPlayer2();

}

  winOrLose = () => {
    if (this.state.final_score !== 0) {
    if(this.state.Score === this.state.final_score) {
      console.log('win'); 
    }
    if(this.state.Score >= this.state.final_score) {
      console.log('pass the target score');
    }
  }
    }

   getValue = (e) => { 
    this.setState({final_score: e.target.value});
  }


  HoldTheScore = () => {
    this.setState({player1: this.state.Current_Score});
    this.winOrLose();
    if (this.state.switchPlayer === 'Player1'){
      this.setState({switchPlayer: 'Player2'});
      this.props.which_player(this.state.switchPlayer);
   }
   if (this.state.switchPlayer === 'Player2'){
    this.setState({switchPlayer: 'Player1'});
    this.props.which_player(this.state.switchPlayer);
   } 
  }

  player1OrPlayer2 = () => {
  if (this.state.switchPlayer === 'Player1'){
      this.props.which_player(this.state.switchPlayer);
  }
  if (this.state.switchPlayer === 'Player2'){
     this.setState({switchPlayer: 'Player2'});
     this.props.which_player(this.state.switchPlayer);
  }
  }

   render() {
       return (    
           <div>
              <div className='two_dice'>
                <img className='dice1' src={this.state.img1} alt="dice1"></img>
                <img className='dice2' src={this.state.img2} alt="dice2"></img>
               </div>
                 <div className='game_buttons'>
                     <a href="./"><button type="button" className="new_game">NEW GAME</button></a>
                     <button onClick={this.rollTheDice} className='roll_dice'>ROLL DICE</button>
                     <button onClick={this.HoldTheScore} className='hold'>HOLD</button>
                     <input type='text' onChange={this.getValue} className='final_score' placeholder='Final Score'></input>
                </div>
              </div>
  ) 
}
}
export default Twodice;