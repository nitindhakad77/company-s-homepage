import React from 'react'

function Feedback() {
  return (
    <div className='flex'>
      
        <div className='flex flex-col items-center'>
            <div className='mt-5 '>
                <h1 className='text-red-500 text-xl'>CLIENTS'S FEEDBACK</h1>
            </div>
            <div className='text-3xl font-bold mt-3         content-center'>
                <p> PEOPLE SAY'S ABOUT US ! </p>
            </div>
            <div className='mx-auto p-10 text-center'>
                <p className='px-96'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
                </p>  
                    <div className='flex justify-center mt-5'>
                    <p className='text-red-700 font-medium'> JANNAT TUMPA </p>
                    <p className='ml-2 text-gray-600'> -COO, AMERIMAR ENTERPRISES, INC. </p>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Feedback
