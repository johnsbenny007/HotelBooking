import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Header from '../../components/Header/Header.js'
import Offers from '../../components/Offers/Offers.js'
import Featured from '../../components/Featured/Featured.js'
import Trending from '../../components/Trending/Trending.js'
import Guests from '../../components/Guests/Guests.js'
import Maillist from '../../components/MailList/Maillist.js'
import Footer from '../../components/Footer/Footer.js'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Offers/>
      <div className='Container'>
        <Featured/>
        <Trending/>
        <Guests/>
        <Maillist/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
