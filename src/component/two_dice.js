import './two_dice.css'

import React from 'react';

class Twodice extends React.Component {
   render() {
       return (
           <div>
              <div className='two_dice'>
                <div className='dice1'>
                  <div className='dots'>
                     <div className='dot_1'>*</div>
                     <div className='dot_2'>*</div>
                     <div className='dot_3'>*</div>
                     <div className='dot_4'>*</div>
                     <div className='dot_5'>*</div>
                     <div className='dot_6'>*</div>
                    </div>
                </div>
                <div className='dice2'>
                <div className='dots'>
                     <div className='dot_1'>*</div>
                     <div className='dot_2'>*</div>
                     <div className='dot_3'>*</div>
                     <div className='dot_4'>*</div>
                     <div className='dot_5'>*</div>
                     <div className='dot_6'>*</div>
                  </div>
                </div>
              </div>
           </div>
  ) 
}
}
export default Twodice;