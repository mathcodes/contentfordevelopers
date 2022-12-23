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
        <h2 className='title'>{title}</h2>
      </div>
    </a>
  )
}

export default PlatformCard