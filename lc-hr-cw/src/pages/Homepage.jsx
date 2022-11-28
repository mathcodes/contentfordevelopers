import React from 'react'
import Cards from '../components/Card'
import Contributer from '../components/Contributer'
import Footer from '../components/Footer'
import './Homepage.scss'

function Homepage() {
  return (
    <div  className='homepage'>
        <div className='siteDesc'>
            <h2> Provide solution for Leetcode,<br/> Hackerrank and CodeWars</h2>
            <h3>Open Source Website- Anyone can contribute.</h3>
        </div>
        <div className='cards'>
            <Cards name={"Leetcode"}/>
            <Cards name={"HackerRank"}/>
            <Cards name={"CodeWars"}/>
            <Cards name={"Data Structure & Algorithms"}/>
            <Cards name={"Notes & Resources"}/> 
        </div>
          
        <div className='contributors'>
            <Contributer name={"Swarnit"} imgSrc={""}/>
            <Contributer/>
            <Contributer/>
            <Contributer/>
            <Contributer/>
            <Contributer/>
        </div>

        <footer className='footer'>
            <Footer/>
        </footer>
        
    </div>
  )
}

export default Homepage