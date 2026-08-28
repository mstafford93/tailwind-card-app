import React from 'react'

const InputCard = () => {
  return (
    <div className='my-10 text-center'>
      <input type="text" placeholder='Add Name' className='mx-5 border-2 border-blue-600 rounded-md p-2'/>
      <input type="text" placeholder='Add Description' className='mx-5 border-2 border-blue-600 rounded-md p-2'/>
      <input type="text" placeholder='Add Image URL' className='mx-5 border-2 border-blue-600 rounded-md p-2'/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">Add Card</button>
    </div>
  )
}

export default InputCard
