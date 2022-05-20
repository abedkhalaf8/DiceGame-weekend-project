import './Game_buttons.css'

import React from 'react';

class GameButtons extends React.Component {
   render() {
       return (
           <div>
              <div className='game_buttons'>
                  <a href="./"><button type="button" className="new_game">NEW GAME</button></a>
                  <button className='roll_dice'>ROLL DICE</button>
                  <button className='hold'>HOLD</button>
                  <input type='text' className='final_score' placeholder='Final Score'></input>
             </div>
           </div>
   )
  }
}
export default GameButtons;