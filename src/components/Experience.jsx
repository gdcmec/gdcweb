import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { r } from 'maath/dist/misc-7d870b3c.esm';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#FFD700',
        color: '#ffff',
        padding: '2px',
        borderRadius: '5px',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #FFD700' }}
      //date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.title} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div className="bg-gray-900 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={experience.img} alt={experience.company_name} className="w-[100%] h-[60%] object-contain" />
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What we teach</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>GDC Mentoring.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
