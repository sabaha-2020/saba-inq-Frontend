import React from 'react'
import AboutImg from 'src/assets/images/img3.jpg'
import { InqPortal } from 'src/assets/images/logoInqPortal.png';
import 'src/layout/About/About.css';
import 'src/index.css';



const About = () => {
  return (
    <div className='about-container'>
    <img className='about-img' src={AboutImg} alt='AboutImg' /> 
    <div className='about-content'>
      <h1 className='about-pg text-info'>About Us</h1>
      <p>
        InqPortal’s Enquiry Management Software is the most elegant and efficient solution for your sales team to manage enquiries. It helps you track the status of all your deals with minimal effort and makes it easier to organize with team members.
      </p>
    </div>
  </div>
  );
}

export default About;
