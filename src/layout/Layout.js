import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';
import Hero from './Hero/Hero';
import About from './About/About';
import GetStarted from './GetStarted/GetStarted';

const Layout = ({children,title, description,keywords,author}) => {
  return (
      <div className='App'>
     <Helmet>
   
  <meta charSet="UTF-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <title>{title}</title>
      
      
      </Helmet>
      <div>
      <div className='white-gradient'/>
      <Header/>
      <main> 
         <Toaster/>
      {children}
      </main>
     <Hero/>
     <About/>
     </div>
   
    <GetStarted/>
       
      <Footer/>
      
      </div>
  )
}

Layout.defaultProps ={
  title:'Ecommerce App-shop now',
  description:'mern stack project',
  keywords:'mern,react,node,mongodb',
  author:'Sabaha'
}


export default Layout
