import React from 'react'
import './Contributer.scss'
function Contributer({name,imgSrc,location,linkToProfile}) {
  return (
    <div className='contributer'>
        <img 
			className='contributerImg'
			src={imgSrc}
			alt="contributer image"
		/>
		<div className='detail'>

			<h1>{name}</h1>
			<p>{location}</p>
			<button><a href={linkToProfile} target='blank'>Profile</a></button>
		</div>
    </div>
  )
}

export default Contributer