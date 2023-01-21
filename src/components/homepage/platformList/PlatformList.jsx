import React from 'react'
import PlatformCard from '../../card/PlatformCard'

const PlatformList = () => {
  return (
    <div className="flex flex-wrap justify-center mb-8">
                <PlatformCard title="Leetcode" href='/leetcode'/>
                <PlatformCard title="HackerRank" href='/itempage'/>
                <PlatformCard title="CodeWars" href='/codewars'/>
                <PlatformCard title="Data Structures & Algorithms" href='/dsa'/>
                <PlatformCard title="Notes and Resources" href='/notesandresources'/>
            </div>
  )
}

export default PlatformList