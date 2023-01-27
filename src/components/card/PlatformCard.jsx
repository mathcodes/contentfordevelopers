import React from 'react'
// import './PlatformCard.scss'
function PlatformCard({ title, src, href }) {
  return (
    <a href={href}>
      {/* <div className='platform-card'> */}
      <div className="m-4 w-40 h-16 text-center relative border-solid border-2 flex justify-center items-center bg-white rounded-lg">
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