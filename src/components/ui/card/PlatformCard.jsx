import React from 'react'
import './PlatformCard.scss'
function PlatformCard({title,src}) {
  return (
    <div className='platform-card'>
        <img 
            src={src} 
            alt="" 
        />
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default PlatformCard