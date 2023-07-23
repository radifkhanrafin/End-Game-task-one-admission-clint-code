import React from 'react';

const CollageEvent = ({ collageEvent }) => {
    console.log(collageEvent)
    const { eventName, eventBanner, eventDate, eventLocation, eventDescription } = collageEvent;
    return (
        <div className=''>
            <div className="hero h-96 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={eventBanner} className="max-w-lg w-96 rounded-lg shadow-2xl" />
                    <div className=' mb-20 space-y-4 mt-10 py-6'>
                        <h1 className="text-4xl ">Event : <span className='font-semibold'> {eventName}</span></h1>
                        <p className="text-lg">About This Event : {eventDescription}</p>
                        <p className="">Event Date : {eventDate}</p>
                        <p className="">Event Location : {eventLocation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageEvent;