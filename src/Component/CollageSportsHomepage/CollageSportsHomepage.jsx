import React from 'react';

const CollageSportsHomepage = ({ collageSport }) => {
    const { sportName, sportBanner, teamSize, coachName, trainingSchedule, homeGround } = collageSport
    return (
            <div className=' mb-5'>
                <h1 className=""> {sportName}</h1>
                <p className=" ">Coach : {coachName}</p>
                <p className="">Schedule: {trainingSchedule}</p>
                <p className="">Our Size : {teamSize}</p>
                <p className=""> Location : {homeGround}</p>
            </div>
    );
};

export default CollageSportsHomepage;