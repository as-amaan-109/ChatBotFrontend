import React from 'react'

const WhyusCard = (props) => {
  return (
    <div className='cursor-pointer px-4 py-8 md:py-10 rounded-xl hover:border '>
        <h1 className='text-lg font-semibold '>{props.icon} &nbsp;{props.heading}</h1>
        <p>{props.text}</p>
    </div>
  )
}

export default WhyusCard