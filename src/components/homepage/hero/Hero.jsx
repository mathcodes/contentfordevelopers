import React from 'react'

//This is a component that serves as a main element of the landing page, right under the navbar
const Hero = () => {
  return (
    <div className=' mx-auto flex flex-col items-center justify-center lg:p-20 py-16 px-10 gap-6 leading-7 dark:text-platinum text-blue dark:bg-blue bg-white border-solid border-2'>
                <p>
                    Welcome to ContentForDevelopers! This is an open-source project aimed at providing learning tools for developers that cover a wide range of learning styles. The devoted team behind this project have all been through and continue to perservere through learning new content, technology, updates, languages, frameworks, problem-solving strategies, frontend & backend archtiecture, and so much more. Now we are all giving back to the community in the most helpful way we can think of: providing FREE, UP-TO-DATE, and DIVERSE methods to learn the skills needed to make it in this industry!</p>
                    <hr /><p>
                    Want to join the team?!? Anyone can contribute by visiting the GitHub Repo! We would love to have you on board and welcome all levels of experience. Jon makes sure to keep a handful of 'good first issue' options available, so give it a shot, and if you're new, we offer assistance to walk you through the process. Become a contributor TODAY and start becoming part of the community!
                </p>
            </div>
  )
}

export default Hero