import React from 'react'

export default function PageHeader({ title, description, image }) {
  return (
    <div className="flex flex-row px-0">
      <div className="flex justify-center w-1/4 px-0">
        <img src={image} alt="LeetCode Logo" className="w-3/4" />
      </div>
      <div className="w-2/4 px-0 ">
        {/* HOVER TITLE
  note: added the yellow from LeetCode logo to config 'lcyellow: "#f79f1bff"'*/}
        <div className='flex flex-row px-0 py-5'>
          <h1 className='justify-center text-3xl'>{title}</h1>
          {/* <h1 className='justify-center text-3xl hover:text-lcyellow'>L</h1><h1 className='justify-center text-3xl hover:text-accent2'>e</h1><h1 className='justify-center text-3xl hover:text-accent'>e</h1><h1 className='justify-center text-3xl hover:text-accent2'>t</h1><h1 className='justify-center text-3xl hover:text-lcyellow'>C</h1><h1 className='justify-center text-3xl hover:text-accent2'>o</h1><h1 className='justify-center text-3xl hover:text-lcyellow'>d</h1><h1 className='justify-center text-3xl hover:text-accent2'>e</h1></div> */}
        </div>
        <h3>{description}</h3>
      </div>
    </div>
  )
}
