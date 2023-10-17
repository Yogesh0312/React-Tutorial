import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-700 text-white'>user : {userid} </div>
  )
}

export default User