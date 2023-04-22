import { BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useState , useEffect } from 'react';
import axios from 'axios';

const EventPopup = ({ popupEvent, viewPastEvents, setPopup }) => {

  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/cms/events/get-gallery/${popupEvent.event_id}`);
      setGallery(res.data.gallery);
    };
    fetch();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 0.5,
        x: { duration: 0.5 },
      }}
      className="text-white transition ease-in-out delay-150 bg-black min-h-[50%] md:min-h-[50%] min-w-[80%] md:min-w-[50%] fixed z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-10 border-2 border-[#FFF3D4] rounded flex flex-col justify-center items-center gap-10 md:gap-2"
    >
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-10 md:gap-2">
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <p className="text-3xl">{popupEvent.title}</p>
          <p>{popupEvent.date}</p>
          <p>{popupEvent.location}</p>
          <p>{popupEvent.description}</p>
          {!viewPastEvents && (
            <>
              <button className="outline outline-white align-center text-center px-4 py-1 rounded text-md">
                Register
              </button>
              <div className="flex flex-row gap-4">
                <p className="flex items-center gap-1">
                  <BiPhoneCall /> Admin
                </p>
                <p className="flex items-center gap-1">
                  <BiPhoneCall />
                  Manager
                </p>
              </div>
            </>
          )}
        </div>
        <div className="w-full h-full">
          <img src={popupEvent.poster_url} />
        </div>
      </div>
      {viewPastEvents && (
        <div className="h-24 w-full flex flex-row justify-start gap-4 overflow-y-scroll">
          {gallery.map((image) => (
            <img
            className="h-full w-auto shrink-0 object-contain"
              src={image.image_url}
            />
          ))}
      <img
         className="h-full w-auto shrink-0 object-contain"
         src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
       />
      <img
         className="h-full w-auto shrink-0 object-contain"
         src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
       />
      <img
         className="h-full w-auto shrink-0 object-contain"
         src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
       />
        </div>
      )}

      
      <button
        className="absolute top-0 right-0 m-4"
        onClick={() => {
          setPopup(false);
        }}
      >
        Close
      </button>
    </motion.div>
  );
};

export default EventPopup;
