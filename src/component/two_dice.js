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
    Score: 0
}
  rollTheDice = () => {
   const dice1 = Math.floor(Math.random() * 6) + 1;
   const dice2 = Math.floor(Math.random() * 6) + 1;
   const array = ["",Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
   this.setState({img1: array[dice1]});
   this.setState({img2: array[dice2]});
   this.setState({Current_Score: this.state.Current_Score + dice1 + dice2});
   const result = this.state.Current_Score;
   this.props.current_score(result);
  }
  HoldTheScore = () => {
    this.setState({Score: this.state.Current_Score});
    this.props.score(this.state.Score);
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
                     <input type='text' className='final_score' placeholder='Final Score'></input>
                </div>
              </div>
  ) 
}
}
export default Twodice;