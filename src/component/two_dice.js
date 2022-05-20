import './two_dice.css'

import React from 'react';
class Twodice extends React.Component {
  rollTheDice = () => {
   const dice = Math.floor(Math.random() * 6) + 1;
   if (dice === 1 ){
    const img = require('./imgs/dice1.png');
     return img;
   }
   if (dice === 2 ){
    const img = require('./imgs/dice2.png');
    return img;
  }
   if (dice === 3 ){
    const img = require('./imgs/dice3.png');
    return img;
  }
   if (dice === 4 ){ 
    const img = require('./imgs/dice4.png');
    return img;
  }
   if (dice === 5 ){
    const img = require('./imgs/dice5.png');
    return img;
  }
   if (dice === 6 ){
    const img = require('./imgs/dice6.png');
    return img;
    
  }
  }
   render() {
       return (    
           <div>
              <div className='two_dice'>
                <img className='dice1' src={this.rollTheDice()} alt="dice1"></img>
                <img className='dice2' src={this.rollTheDice()} alt="dice2"></img>
               </div>
              </div>  
  ) 
}
}
export default Twodice;