import React from 'react';

const CollageEventHomePage = ({ collageEvent }) => {
    const { eventName, eventBanner, eventDate, eventLocation, eventDescription } = collageEvent;
    return (
            <div className=' mb-3'>
                <h1 className="font-semibold">  {eventName}</h1>
                <p className="">{eventDescription}</p>
                <p className=""> Date : {eventDate}</p>
                <p className=""> Location : {eventLocation}</p>
            </div>
    );
};

export default CollageEventHomePage;