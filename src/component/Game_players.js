import './Game_players.css'

import React from 'react';

class Players extends React.Component {
 light = (player) => {
    if(this.props.which_player === "Player1") {
        return 'light';
    } 
    return 'nope';
}
light2 = (player) => {
    if(this.props.which_player === "Player2") {
        return 'light';
    } 
    return 'nope';
}

render() {
       return (
           <div>
             <div className='Player1' id={this.light()}>
                  <h1 className='players-title'>Player 1</h1>
                  <label className='score'>0</label>
                  <div className='current_score'>
                      <label id='current'>CUTRRENT </label>
                      <label>0</label>
                  </div>
             </div>
             <div className='Player2' id={this.light2()}>
                  <h1 className='players-title'>Player 2</h1>
                  <label className='score'>0</label>
                  <div className='current_score'>
                      <label id='current'>CUTRRENT </label>
                      <label>0</label>
                  </div>
             </div>
           </div>
        )
     }
 }
export default Players;