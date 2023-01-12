import React from 'react'
import './PlatformCard.scss'
function PlatformCard({ title, src, href }) {
  return (
    <a href={href}>
      <div className='platform-card'>
        <img
          src={src}
          alt=""
        />
        <p className='title'>{title}</p>
      </div>
    </a>
  )
}

export default PlatformCard