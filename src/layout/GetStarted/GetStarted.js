

import React from 'react';
import './GetStarted.css';


const GetStarted = () => {
  return (
 
 <div className='g-wrapper'>
 <div className=' innerwidth g-container'>
 <div className='flexColCenter inner-container'>
    <span className='primaryText'>Get Started With InqPortal</span>
    <span className='secondaryText'>Register and find the best place to<br/> explore your carrier dream job</span>
    <form>
      <div className="input-group">
                    <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                    <button className="btn btn-dark">Get Started</button>
                  </div>
                </form>
    </div> 
    </div> 
 </div>

   
  )
}

export default GetStarted