import './two_dice.css'

import React from 'react';

class Twodice extends React.Component {
   render() {
       return (
           <div>
              <div className='two_dice'>
                <img className='dice1' src={require('./imgs/dice1.png')} alt="dice1"/>
                <img className='dice2' src={require('./imgs/dice2.png')} alt="dice2"/>
                </div>
              </div>  
  ) 
}
}
export default Twodice;