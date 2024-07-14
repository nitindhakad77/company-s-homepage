import React, { useState } from 'react';
// import './Slider.css';
import image1 from '../assets/slide1.png';
import image2 from '../assets/slide2.png';
import image3 from '../assets/slide3.png';
import image4 from '../assets/slide4.png';
import image5 from '../assets/slide5.png';
import image6 from '../assets/slide6.png';
import image7 from '../assets/slide7.png';
import image8 from '../assets/slide8.png';
import image9 from '../assets/slide9.png';
import image10 from '../assets/slide10.png';
import image11 from '../assets/slide11.png';
import image12 from '../assets/slide12.png';


const images = [
  image1, image2, image3, image4,
  image5, image6, image7, image8,
  image9, image10, image11, image12
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className='ml-10'>
      <div className="flex p-10 ml-10 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-1/4 h-full flex-shrink-0 relative group ml-5">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className=" absolute inset-0 flex flex-col items-center justify-center text-white bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <img src='icon.svg' className=''/>
              <h1 className='text-xl mt-4'>WEB DEVELOPMENT </h1>
              <p className='mt-4'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
              <button
                className="bg-white text-black px-4 py-2 rounded mt-4 text-red-500"
                onClick={() => window.open('https://fylehq.com', '_blank')}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="absolute bottom-2 left-10 ml-10 flex space-x-2">
       <div className='ml-10'>
        {[...Array(3)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 ml-5 rounded-full ${currentIndex === index ? 'bg-red-500 rounded-full border-1 border-red-500 shadow-lg ring-2 ring-red-300 ring-offset-4' : 'bg-gray-500'}`}
          />
        ))}
        </div>
      </div>
      
      <button onClick={prevSlide} className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 p-2 rounded-full">
        &#8592;
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 p-2 rounded-full">
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
