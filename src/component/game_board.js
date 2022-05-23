import './styles/two_dice.css'
import './styles/Game_buttons.css'
import './styles/Game_players.css'

import Dice1 from './imgs/dice1.png';
import Dice2 from './imgs/dice2.png';
import Dice3 from './imgs/dice3.png';
import Dice4 from './imgs/dice4.png';
import Dice5 from './imgs/dice5.png';
import Dice6 from './imgs/dice6.png';
import React from 'react';

class GameBoard extends React.Component {
    state = {
    img1: Dice1,  
    img2: Dice2, 
    Current_Score: 0, 
    Current_Score2: 0, 
    final_score: 0,   
    switchPlayer : 'Player1',  
    player1_score: 0, 
    player2_score: 0,   
    }
  rollTheDice = () => {
   const dice1 = Math.floor(Math.random() * 6) + 1;
   const dice2 = Math.floor(Math.random() * 6) + 1;
   const array = ["",Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
   this.setState({img1: array[dice1]});
   this.setState({img2: array[dice2]});

         if ( 6 === dice1 && 6 === dice2){            
             this.setState({})
             if (this.state.switchPlayer === 'Player1'){
                   this.setState({player1_score: this.state.Current_Score});
                   this.setState({Current_Score: 0});
                   this.setState({switchPlayer : 'Player2'});
                 
             }
             if (this.state.switchPlayer === 'Player2'){
                  this.setState({player2_score: this.state.Current_Score2});
                  this.setState({Current_Score2: 0});
                  this.setState({switchPlayer : 'Player1'});
               } 
               } else if (this.state.switchPlayer === 'Player1')
               {
                this.setState({Current_Score: this.state.Current_Score + dice1 + dice2});
               } else { 
                this.setState({Current_Score2: this.state.Current_Score2 + dice1 + dice2});
               }
           }


  winOrLose = () => {
    if (this.state.final_score !== 0) {
       if(this.state.player1_score === this.state.final_score) {
              alert('Player1 IS THE WINNER');
       }
       if(this.state.player2_score === this.state.final_score) {
              alert('Player2 IS THE WINNER');
          }  
      if(this.state.player1_score > this.state.final_score) {
             alert('Player2 IS THE WINNER');
      }
      if(this.state.player2_score > this.state.final_score) {
             alert('Player1 IS THE WINNER');
       }
      }
}
  HoldTheScore = () => {
    if (this.state.switchPlayer === 'Player1'){
      this.setState({switchPlayer: 'Player2'});
      this.setState({player1_score  : this.state.player1_score + this.state.Current_Score});
      this.setState({Current_Score: 0});
   }
   if (this.state.switchPlayer === 'Player2'){
    this.setState({switchPlayer: 'Player1'});
    this.setState({player2_score  : this.state.player2_score + this.state.Current_Score2 });
    this.setState({Current_Score2: 0});
   }
   this.winOrLose(); 
  }
  
  getValue = (e) => { 
    this.setState({final_score: e.target.value});
  
  }

  light = () => {
    if (this.state.switchPlayer === 'Player1'){
      return 'light';
    }
    return 'nope'; 
  }
  light2 = () => {
    if (this.state.switchPlayer === 'Player2'){
      return 'light';
    } 
    return 'nope'; 
  }
render() {
       return (    
           <div>
             <div className="Main">
              <div className="project-title">
                      <div className="row">
                      <div className="col-md-12 text-center">
                       <h3 className="animate-charcter">Dice Game - Weekend Project with ReactJS</h3>
                     </div>
                  </div>
               </div>
               <div className='Players'>
                   <div className='Player1' id={this.light()}>
                    <h1 className='players-title' id={this.light()}>Player 1</h1>
                    <label className='score'>{this.state.player1_score}</label>
                    <div className='current_score'>
                        <label id='current'>CUTRRENT </label>
                        <label>{this.state.Current_Score}</label>
                    </div>
                    <div className='Player2' id={this.light2()}>
                    <h1 className='players-title' id={this.light2()}>Player 2</h1>
                    <label className='score'>{this.state.player2_score}</label>
                    <div className='current_score'>
                        <label id='current'>CUTRRENT </label>
                        <label>{this.state.Current_Score2}</label>
                    </div>
                    </div> 
             </div>
             </div>
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
      </div>
)
}
}

export default GameBoard;
