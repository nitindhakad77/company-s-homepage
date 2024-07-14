import React from 'react'
import Arrow from '../components/Arrow'
function Second() {
  return (
    <div className='mt-10'>
      <div className='pt-8'>
        <div className='ml-10'>
        <div className='flex text-start ml-10 p-5 text-xl mt-2'>
            <h1 className='text-red-500 ml-10'>WHAT WE DO</h1>
        </div>
        <div className='flex ml-5'>
          <div className='flex'>  
            <div className='w-2/5 text-start ml-10 p-8 -mt-10'>
                <p className='text-3xl font-bold ml-2 mt-2 '>SERVICES PROVIDE</p>
                <p className='text-3xl font-bold ml-2 mt-2'>FOR YOU</p>
            </div>
            <div className='w-2/5 text-start px-0' >
                <p className=''>Morbi sed lacus nec risus finibus feugiat fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum,Morbi sed lacus</p>
            </div>
           </div> 
           </div>
        </div>
      </div>
      <Arrow/>
    </div>
  )
}

export default Second
