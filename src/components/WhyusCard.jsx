import React from 'react'

const WhyusCard = (props) => {
  return (
    <div className='border-b-2 px-4 py-8 md:py-10'>
        <h1 className='text-lg font-semibold'>{props.icon} &nbsp;{props.heading}</h1>
        <p>{props.text}</p>
    </div>
  )
}

export default WhyusCard