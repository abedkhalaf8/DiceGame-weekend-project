import GameBoard from './component/game_board';
import React from 'react';

class App extends React.Component {
    render() {
        return (
             <div>
                 <GameBoard />
                 <p>MADE BY ABED KHALAF</p>
             </div>
         )
     }
}

export default App;