import React, { useState } from 'react';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  ]);

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    shiftImages(newIndex);
  };

  const goToPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    shiftImages(newIndex);
  };

  const shiftImages = (newIndex) => {
    const shiftedImages = [...images];
    const shiftAmount = currentImageIndex - newIndex;

    if (shiftAmount > 0) {
      for (let i = 0; i < shiftAmount; i++) {
        shiftedImages.push(shiftedImages.shift());
      }
    } else if (shiftAmount < 0) {
      for (let i = 0; i > shiftAmount; i--) {
        shiftedImages.unshift(shiftedImages.pop());
      }
    }

    setCurrentImageIndex(newIndex);
    setImages(shiftedImages);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row items-center  ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-48  transition-all duration-1000 ${
              index == 1 ? '' : index > 0 ? 'transale-y-2 h-36 w-48' : 'rotate-y-45 scale-50 h-36 w-48 -translate-x-4'
            }`}
            style={{ transform: `rotateY(${index == 1 ? '0' : index > 0 ? '-45' : '45'}deg)`,
            zIndex: `${index == 1 ? '1' : index > 0 ? '0' : '0'}`,
          translateX: `${index == 1 ? '0' : index > 0 ? '-4' : '4'}rem`,
         }}
          >
            <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold"></h3>
                <p className="text-lg"></p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg" onClick={goToPreviousImage}>
          Previous
        </button>
        <button className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg" onClick={goToNextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
