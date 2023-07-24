import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { } from "moment";
const MyCollageData = ({ application }) => {
    const [mysubmissionCollage, setMysubmissionCollage] = useState([])
    const Admissioncollagedata = useLocation()
    const admissionCollage = Admissioncollagedata.state;
    console.log(admissionCollage.college_id)
    useEffect(() => {
        fetch(`http://localhost:5000/myadmissioncollage/${admissionCollage.college_id}`)
            .then(res => res.json())
            .then(data => {
                console.log('my collage', data)
                setMysubmissionCollage(data)
            })
    }, []);
    return (
        <div>
            <div>
                {
                    mysubmissionCollage?.map(collage =>
                        <div className="card-body capitalize">
                            <div>
                                <h2 className="card-title">{collage.collegeName}</h2>
                                <p> <span className='font-semibold'>Our Admission Start Date : </span> {collage.admissionDate.start_date}</p>
                                <p> <span className='font-semibold'>Our Admission End Date :</span>  {collage.admissionDate.end_date}</p>
                                <p> <span className='font-semibold'>number of the research :</span> {collage.numberOfResearch}</p>
                            </div>
                            <h1 className='text-end'><span className='font-semibold'>Our research History :</span>{collage.research.map(example => <p key={example}> {example}</p>)} </h1>

                            <h1 className=''> <span className='font-semibold'>Our Event :</span>  {collage.events.map(e => <li>{e.eventName}</li>)}</h1>
                            <h1 className='text-end'> <span className='font-semibold'>Our Sports  :</span> {collage.sports.map(e => <p>{e.sportName}</p>)}</h1>
                        </div>
                    )
                }
            </div>

        </div>

    );
};

export default MyCollageData;