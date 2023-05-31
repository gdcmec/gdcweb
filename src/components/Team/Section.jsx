import React from 'react';
import Grid from './Grid';

const Section = ({ teamMembers }) => {
  return (
    <div>
      {teamMembers.map((value) => {
        return (
          <div>
            <h1 className="py-12 text-center text-white text-2xl">{value.section}</h1>
            <Grid teamMembers={value.members} />
          </div>
        );
      })}
    </div>
  );
};

export default Section;
