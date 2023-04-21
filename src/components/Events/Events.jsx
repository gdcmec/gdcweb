import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import './Events.css';
import EventCard from './EventCard';
import EventPopup from './EventPopup';

const Events = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses =
    scrollPos > 1000
      ? 'bg-[#181819] gradient2 transition-all duration-500 ease-out'
      : 'bg-[#181819] gradient3 transition-all duration-500 ease-out';

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupEvent, setPopupEvent] = useState({});
  const [viewPastEvents, setViewPastEvents] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/cms/events/getHeaders`);
      const events = res.data.events;
      setEvents(res.data.events);
      for (const event of events) {
        const date = new Date(event.date);
        const today = new Date();
        if (date >= today) {
          setUpcomingEvents((prev) => [...prev, event]);
        } else {
          setPastEvents((prev) => [...prev, event]);
        }
      }
    };
    fetch().then(() => setLoading(false));
  }, []);

  const handleClick = (index) => {
    setPopup(true);
    if (viewPastEvents) {
      setPopupEvent(pastEvents[index]);
    } else {
      setPopupEvent(upcomingEvents[index]);
    }
  };

  return (
    <div id="events" className="scroll-mt-[70px]">
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
      {popup && <EventPopup popupEvent={popupEvent} viewPastEvents={viewPastEvents} setPopup={setPopup} />}
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

        <div className="h-[65vh] md:min-h-[60vh] md:py-10 flex flex-col md:flex-row justify-start items-center gap-10 overflow-x-scroll md:overflow-y-scroll ">
          {viewPastEvents &&
            pastEvents.map((event, index) => {
              return <EventCard event={event} index={index} handleClick={handleClick} />;
            })}

          {!viewPastEvents && upcomingEvents.length === 0 ? (
            <div className="w-full h-full flex flex-col justify-center items-center gap-10">
              <h1 className="text-2xl">No Upcoming Events</h1>
              <button
                onClick={() => {
                  setViewPastEvents(true);
                }}
                className='px-2 rounded bg-[#FFF3D4] text-black' 
              >
                Past Events
              </button>
            </div>
          ) : (
            upcomingEvents.map((event, index) => {
              return <EventCard event={event} index={index} handleClick={handleClick} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
