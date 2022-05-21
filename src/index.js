import GameBoard from './component/game_board';
import React from 'react';
import ReactDOM from 'react-dom/client';
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);