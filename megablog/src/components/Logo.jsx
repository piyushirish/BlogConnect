import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div >
      <img src="/logoblogconnect.png" 
      alt="BlogConnect Logo"
      width={width}
      className='rounded-2xl'
       />
      </div>
  )
}

export default Logo
