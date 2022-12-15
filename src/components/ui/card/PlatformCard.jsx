import React from 'react'
import './PlatformCard.scss'
function PlatformCard({title}) {
  return (
    <div className='platform-card'>
        {/* <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
            alt="" 
        /> */}
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default PlatformCard