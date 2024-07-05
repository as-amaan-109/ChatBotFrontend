import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='mx-auto p-10 w-fit text-center'>
        <h1 className='text-2xl'>404 PAGE NOT FOUND  </h1>
        <Link to="/" className='underline'>Go Back To Home</Link>
    </div>
  )
}

export default ErrorPage