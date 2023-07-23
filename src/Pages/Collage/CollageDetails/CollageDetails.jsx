import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CollageEvent from '../CollageEvent/CollageEvent';
import CollageSports from '../CollageSports/CollageSports';

const CollageDetails = () => {
    const [events, setEvents] = useState();
    const [sports, setSports] = useState();
    const collageData = useLocation();
    const collageEvent = collageData.state.events;
    const collageSports = collageData.state.sports;


    console.log(collageEvent)
    console.log(collageSports)
    return (
        <div className='flex flex-col gap-24 lg:gap-10'>
            <div className='min-h-[70vh] mb-12'>
                <h1 className='capitalize text-4xl text-center font-semibold my-14 '>Our Events facilities</h1>

                <div className='flex flex-col  gap-64 lg:gap-16'>
                    {
                        collageEvent?.map(collageEvent => <CollageEvent
                        key={collageEvent.eventName}
                            collageEvent={collageEvent}

                        ></CollageEvent>)
                    }
                </div>
            </div>
            <div className='mt-12'>
                <h1 className='capitalize text-4xl text-center font-semibold my-12'>Our Sports facilities</h1>

                <div className='flex flex-col  gap-64 lg:gap-16'>
                    {
                        collageSports?.map(collageSport => <CollageSports
                        key={collageSport.sportName}
                            collageSport={collageSport}
                        ></CollageSports>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CollageDetails;