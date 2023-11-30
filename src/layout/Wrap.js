import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'


const Wrap = ({children}) => {
  return (
   <>
   <Header/>
 <main>{children}</main>
   <Footer/>
   </>
  )
}

export default Wrap