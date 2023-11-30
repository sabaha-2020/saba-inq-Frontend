import React from 'react'
import HeroImg from 'src/assets/images/img6.jpg'
import 'src/layout/Hero/Hero.css'


const Hero = () => {
  return (
    <section className='hero-wrapper'>
<div className='paddings innerWidth hero-container'>
<div className=' flexCenter hero-left'>
<div className='  hero-title'>
  <div className='orange-circle'/>
  <h1>Sophisticated Enquiry <br/>Management Solution to<br/>Enhance your Conversions</h1>
</div>
<div className='hero-des'>
  <span>Experience a hassle-free Enquiry Management System that delights clients with </span>
  <span>minimum response time</span>
</div>
<a href="#contact" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                     
</div>
<div  className=' flexCenter hero-right'>
<div className='image-container'>
    <img src={HeroImg}  alt='banner-img'/>
</div>
</div>
</div>

    </section>
  )
}

export default Hero
