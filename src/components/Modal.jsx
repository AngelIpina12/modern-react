import React from 'react'

export const Modal = () => {
  return (
    <div>
      <div className='absolute inset-0 bg-gray-300 opacity-80'></div>
      <div className='absolute inset-40 p-10 bg-white'>
        It's a modal
      </div>
    </div>
  )
}
