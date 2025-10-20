import React from 'react'
import { BiStore } from "react-icons/bi";

function KeyMetrics() {
  return (
    <div className='w-72 h-56 flex flex-col items-center justify-center border border-gray-400 group hover:bg-red-600 transition-colors '>
      <div className="bg-gray-400 group-hover:bg-gray-200 w-20 h-20 rounded-full flex justify-center items-center mb-3">
        <div className="bg-black group-hover:bg-white text-white  group-hover:text-black w-14 h-14 rounded-full flex justify-center items-center">

          <BiStore className='w-10 h-10' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center group-hover:text-white'>
        <h5>10.5k </h5>
        <p>Sallers active our site</p>
      </div>
    </div>
  )
}

export default KeyMetrics
