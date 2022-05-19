import React from 'react';

class Players extends React.Component {
   render() {
       return (
           <div>
             <div className='Player1'>
                  <h1>Player 1</h1>
                  <label>0</label>
                  <div className='CURRENT_SCORE'>
                      <label>Current</label>
                      <label> 0</label>
                  </div>
             </div>
             <div className='Player2'>
                  <h1>Player 2</h1>
                  <label>0</label>
                  <div className='CURRENT_SCORE'>
                      <label>Current </label>
                      <label>0</label>
                  </div>
             </div>
           </div>
        )
     }
 }
export default Players;