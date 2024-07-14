import React from 'react'

function Features() {
  return (
    <div className='flex flex-col items-center mb-8'>
        <div className='flex flex-col items-center'>
            <p className='text-red-500 font-bold mt-5'>WHY CHOOSE US</p>
            <p className='text-3xl font-bold mt-4'>WHY WE ARE BEST</p>
        </div>
        <div className='flex justify-center items-center w-full max-w-4xl mt-10 gap-5'>
            <div>
                <img src='1.png'/>
                <div className='mt-2'>
                  <p className='font-bold'>Clarified Vision & Target</p>
                  <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            </div>
            <div>
            <img src='2.png'/>
                <div className='mt-2'>
                  <p className='font-bold'>High Performance</p>
                  <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            </div>
            <div>
            <img src='3.png'/>
                <div className='mt-2'>
                  <p className='font-bold'>Maintain Secuirity</p>
                  <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            </div>
            <div>
            <img src='4.png'/>
                <div className='mt-2'>
                  <p className='font-bold'>Better Strategy and Quality </p>
                  <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
