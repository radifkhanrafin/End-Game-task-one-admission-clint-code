import React from 'react';

const CollageSports = ({ collageSport }) => {
    console.log(collageSport)
    const { sportName, sportBanner, teamSize, coachName, trainingSchedule, homeGround } = collageSport
    return (
        <div className=''>
            <div className="hero h-96 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div className=' mb-20 space-y-4 mt-10 py-6'>
                        <h1 className="text-4xl ">Soprts Like  : <span className='font-semibold'> {sportName}</span></h1>
                        <p className="text-lg font-semibold">Coach Name:{coachName}</p>
                        <p className="text-lg">Playing  Schedule: {trainingSchedule}</p>
                        <p className="">Our Size : {teamSize}</p>
                        <p className="">Sports Location : {homeGround}</p>
                    </div>
                    <img src={sportBanner} className="max-w-lg w-96 rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default CollageSports;