import React from 'react'
import DressCards from './DressCards'
import Footer from '../GeneralComponents/Footer'
import HomeCarousel from './HomeCarousel'
import NavbarMenu from '../GeneralComponents/NavbarMenu'

const index = () => {
  return (
    <div>
        <NavbarMenu/>
        <HomeCarousel/>
        <br/> <br/>
        <DressCards/>
        <Footer/>
    </div>
  )
}

export default index