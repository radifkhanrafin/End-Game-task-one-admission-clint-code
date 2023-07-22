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
        <div>
            <div className='min-h-[70vh]'>
                <h1 className='capitalize text-4xl text-center font-semibold mt-14'>Our Events facilities</h1>

                <div>
                    {
                        collageEvent?.map(collageEvent => <CollageEvent
                        key={collageEvent.eventName}
                            collageEvent={collageEvent}

                        ></CollageEvent>)
                    }
                </div>
            </div>
            <div>
                <h1 className='capitalize text-4xl text-center font-semibold mt-14'>Our Events facilities</h1>

                <div>
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