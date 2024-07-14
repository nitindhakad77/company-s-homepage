import React from 'react'

function Experts() {
  return (
    <div className='flex flex-col items-center mb-8 p-10 bg-gray-100'>
        <div className='flex flex-col items-center'>
            <p className='text-red-500 font-bold mt-5'>EXPERTS GROWTS</p>
            <p className='text-3xl font-bold mt-4'>OUT COMPANY GROWTH</p>
        </div>
        <div className='flex justify-center items-center w-full max-w-4xl mt-10 gap-10'>
            <div className='text-center justify-center p-5 bg-slate-50 hover:bg-white hover:shadow-md '>
                <div className='flex justify-center items-center'>  
                <img src='heart.svg' className='h-5'/>
                </div>
                <div className='mt-2'>
                  <p className='text-4xl'>199 + </p>
                  <p> Satisfied Customers </p>
                </div>
            </div>
            <div className='text-center justify-center p-5 bg-slate-50 hover:bg-white hover:shadow-md '>
                <div className='flex justify-center items-center '> 
                <img src='clock.svg' className='h-5'/>
                </div>
                <div className='mt-2'>
                  <p className='text-4xl'>1591+</p>
                  <p>Days of Operation</p>
                </div>
            </div>
            <div className='text-center justify-center p-5 bg-slate-50 hover:bg-white hover:shadow-md'>
            <div className='flex justify-center items-center'>
            <img src='path1.svg' className='h-5'/>
            </div>
                <div className='mt-2'>
                  <p className='text-4xl'>283+</p>
                  <p> Complete Project</p>
                </div>
            </div>
            <div className='text-center justify-center p-5 bg-slate-50 hover:bg-white hover:shadow-md '>
            <div className='flex justify-center items-center'> 
            <img src='path2.svg' className='h-5'/>
            </div>
                <div className='mt-2'>
                  <p className='text-4xl'>75+</p>
                  <p> Win Awards</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Experts;
