import React from 'react'
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Laboratory from '../../components/Laboratory/Laboratory';
import Info from '../../components/Info/Info';
import Books from '../../components/Books/Books';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <>
      <Banner /> 
      <About />
      <Laboratory />
      <Info />
      <Books />
      <Footer />
    </>
  )
}

export default Main;