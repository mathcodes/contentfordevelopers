import React from 'react'
import Cards from '../components/Card'
import Contributer from '../components/Contributer'
import Footer from '../components/Footer'
import PlatformCard from '../components/ui/card/PlatformCard'
import './Homepage.scss'


function Homepage() {
  return (
    <div  className='homepage'>
        <div className='siteDesc'>
            <h2>
                Welcome to our open-source effort to bring developers together to HELP other developers with abundant, diverse styles of learning!!! Anyone can submit/contribute their solutions to DSA and eventually all languages and coding problems, but again, what sets this project apart is the emphasis on supplemental and diverse learning styles and tools including diagrams, animations, pseudocode, retention strategies, and more... including what you bring to the table!
            </h2>
           
        </div>
        {/* <div className='cards'>
            <Cards name={"Leetcode"}/>
            <Cards name={"HackerRank"}/>
            <Cards name={"CodeWars"}/>
            <Cards name={"Data Structure & Algorithms"}/>
            <Cards name={"Notes & Resources"}/> 
        </div> */}
        <div className='platform_wrapper'>
            <PlatformCard title='Leetcode' />
            <PlatformCard title='HackerRank' />
            <PlatformCard title='CodeWars' />
            <PlatformCard title='Data Structure & Algorithm' />
            <PlatformCard title='Notes and Resources' />    
        </div>
        

        <section className='contributor_section'>
            <div className='desc'>
                <h1>Our Contributers</h1>
                <h3>Who constantly try to make the website better</h3> 
            </div>
           
            <div className='contributors_wrapper'>
                <Contributer 
                    name={"Jon Christie"} 
                    imgSrc={"https://avatars.githubusercontent.com/u/17928947?v=4"} 
                    location={"North Carolina, USA"}
                    linkToProfile={"https://github.com/mathcodes"}
                />
                <Contributer 
                    name={"Swarnit Sinha"} 
                    imgSrc={"https://avatars.githubusercontent.com/u/70957481?v=4"}
                    location={"India"}  
                    linkToProfile={"https://github.com/swarnitsinha"} 
                />
                <Contributer 
                    name={"Ravishankar"} 
                    imgSrc={"https://avatars.githubusercontent.com/u/39592401?v=4"}
                    location={"India"}
                    linkToProfile={"https://github.com/rootrsk"}
                />
                
            </div>
        </section>
          
        

        <footer className='footer'>
            <Footer/>
        </footer>
        
    </div>
  )
}

export default Homepage
