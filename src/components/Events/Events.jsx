import React, { useEffect, useState } from 'react';

import { BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import './Events.css';
import EventCard from './EventCard';

const Events = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = scrollPos > 1000 ? ' bg-black' : 'bg-black';
  const [events, setEvents] = useState([
    {
      date: '2023-07-06',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: '2023-07-06',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: '2023-07-01',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
    {
      date: '2023-03-4',
      title: 'Introduction to GDC',
      location: 'SDPK Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',
    },
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupEvent, setPopupEvent] = useState({});
  const [viewPastEvents, setViewPastEvents] = useState(false);

  useEffect(() => {
    for (const event of events) {
      const date = new Date(event.date);
      const today = new Date();
      if (date >= today) {
        setUpcomingEvents((prev) => [...prev, event]);
      } else {
        setPastEvents((prev) => [...prev, event]);
      }
    }
  }, [events]);

  const handleClick = (index) => {
    setPopup(true);
    if (viewPastEvents) {
      setPopupEvent(pastEvents[index]);
    } else {
      setPopupEvent(upcomingEvents[index]);
    }
  };

  return (
    <div id="events" className="scroll-mt-[90px]">
      {popup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            ease: 'linear',
            duration: 0.2,
            x: { duration: 0.2 },
          }}
          className="fixed top-0 bottom-0 h-screen w-screen z-10 bg-black"
        ></motion.div>
      )}
      {popup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 0.5,
            x: { duration: 0.5 },
          }}
          className="text-white transition ease-in-out delay-150 bg-black min-h-[50%] min-w-[50%] fixed z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-10 border-2 border-[#FFF3D4] rounded flex flex-col justify-center items-center gap-10 md:gap-2"
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
              <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" />
            </div>
          </div>
          {viewPastEvents && (
            <div className="h-24 w-full flex flex-row justify-start gap-4 overflow-y-scroll">
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
              <img
                className="h-full w-auto object-contain"
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
              />
              <img
                className="h-full w-auto object-contain"
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
              />
              <img
                className="h-full w-auto object-contain"
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
              />
              <img
                className="h-full w-auto object-contain"
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
      )}
      <div className={`text-white px-8 py-5 ${navbarClasses} `}>
        <div className="w-full flex flex-row justify-evenly items-center gap-10">
          <h2 className="text-3xl md:text-7xl text-[#FFF3D4]">Events</h2>
          <div className="border border-[#FFF3D4] w-9/12 h-px"></div>
        </div>

        <div className="mx-10 my-2 justify-self-end flex flex-row">
          <button
            onClick={() => {
              setViewPastEvents(false);
            }}
            className={'px-2 rounded' + (viewPastEvents ? '' : ' bg-[#FFF3D4] text-black')}
          >
            Upcoming
          </button>
          <button
            onClick={() => {
              setViewPastEvents(true);
            }}
            className={'px-2 rounded' + (viewPastEvents ? ' bg-[#FFF3D4] text-black' : '')}
          >
            Past
          </button>
        </div>

        <div className="min-h-[60vh] md:py-10 flex flex-col md:flex-row justify-center items-center gap-10 overflow-x-scroll md:overflow-y-scroll bg-black">
          {viewPastEvents &&
            pastEvents.map((event, index) => {
              return <EventCard event={event} index={index} handleClick={handleClick} />;
            })}

          {!viewPastEvents &&
            upcomingEvents.map((event, index) => {
              return <EventCard event={event} index={index} handleClick={handleClick} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Events;
