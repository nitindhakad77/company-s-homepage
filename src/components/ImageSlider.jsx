import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';


const images = {
  option1: image1,
  option2: image2,
  option3: image3,
};

const App = () => {
  const [currentImage, setCurrentImage] = useState(images.option1);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionClick = (option) => {
    setCurrentImage(images[option]);
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className='text-center'>
        <p className='text-red-500 font-bold'> OUR PROJECT</p>
        <p className='text-3xl font-bold my-5'> WHY WE ARE BEST </p>

      </div>
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2 p-4">
          <img src={currentImage} alt="Current" className="w-full h-full rounded" />
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <button 
            className=" py-2 px-4 bg-gray-300 text-black rounded-none hover:bg-red-700" 
            onClick={() => handleOptionClick('option1')}>
            <div className='text-start py-4'>
            <h1 className='text-xl'>Genderless Kei - Japan's Hot </h1>
            <p> Set to launch on the manufactures new A330neo aircraft in 2017, it's offering lots of.</p>
            </div>
          </button>
          <button 
            className="py-2 px-4 bg-gray-300 text-black rounded hover:bg-red-700" 
            onClick={() => handleOptionClick('option2')}>
            <div className='text-start py-4'>
            <h1 className='text-xl'>Better Strategy & Quality </h1>
            <p> Set to launch on the manufactures new A330neo aircraft in 2017, it's offering lots of.</p>
            </div>
          </button>
          <button 
            className="py-2 px-4 bg-gray-300 text-black rounded-none hover:bg-red-700" 
            onClick={() => handleOptionClick('option3')}>
            <div className='text-start py-4'>
            <h1 className='text-xl'>Genderless Kei - Japan's Hot</h1>
            <p> Set to launch on the manufactures new A330neo aircraft in 2017, it's offering lots of.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
