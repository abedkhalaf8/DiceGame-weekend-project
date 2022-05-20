import './Game_players.css'

import React from 'react';

class Players extends React.Component {
   render() {
       return (
           <div>
             <div className='Player1'>
                  <h1 className='players-title'>Player 1</h1>
                  <label className='score'>0</label>
                  <div className='current_score'>
                      <label>Current</label>
                      <label> 0</label>
                  </div>
             </div>
             <div className='Player2'>
                  <h1 className='players-title'>Player 2</h1>
                  <label className='score'>0</label>
                  <div className='current_score'>
                      <label>Current </label>
                      <label>0</label>
                  </div>
             </div>
           </div>
        )
     }
 }
export default Players;