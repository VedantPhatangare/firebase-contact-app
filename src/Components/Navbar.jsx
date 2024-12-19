import React from 'react'

function Navbar() {
  return (
    <div className='h-14 bg-white rounded-lg text-xl font-medium' >
        <div className="flex h-[100%] items-center justify-center gap-2">
        <img src="/images/logo.png" alt="" />
        <h1>Firebase Contact App</h1>
        </div>
    </div>
  )
}

export default Navbar
