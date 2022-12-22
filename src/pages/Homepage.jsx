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
					  Welcome to ContentForDevelopers! This is an open-source project aimed at providing learning tools for developers that cover a wide range of learning styles. The devoted team behind this project have all been through and continue to perservere through learning new content, technology, updates, languages, frameworks, problem-solving strategies, frontend & backend archtiecture, and so much more. Now we are all giving back to the community in the most helpful way we can think of: providing FREE, UP-TO-DATE, and DIVERSE methods to learn the skills needed to make it in this industry!
				    <hr/>
				    Want to join the team?!? Anyone can contribute by visiting the GitHub Repo! We would love to have you on board and welcome all levels of experience. Jon makes sure to keep a handful of 'good first issue' options available, so give it a shot, and if you're new, we offer assistance to walk you through the process. Become a contributor TODAY and start becoming part of the community! 
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
