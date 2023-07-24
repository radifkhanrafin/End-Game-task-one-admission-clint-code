import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {  } from "moment";
const MyCollageData = ({ application }) => {
    const [mysubmissionCollage, setMysubmissionCollage] = useState([])
    const Admissioncollagedata = useLocation()
    const admissionCollage = Admissioncollagedata.state;
    // console.log(admissionCollage.college_id)
    useEffect(() => {
        fetch(`http://localhost:5000/myadmissioncollage/${admissionCollage.college_id}`)
            .then(res => res.json())
            .then(data => setMysubmissionCollage(data))
    }, []);
    return (
        <div>
            <div>
                {
                    mysubmissionCollage?.map(collage =>
                        <div key={collage._id} className="hero h-96 bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={collage.collegeImage} className="max-w-lg w-96 rounded-lg shadow-2xl" />
                                <div className=' mb-20 space-y-4 mt-10 py-6'>
                                    <h1 className="text-4xl "> <span className='font-semibold'> {collage.collegeName}</span></h1>
                                    <p className="text-lg">Number Of Research : {collage.numberOfResearch}</p>
                                    <p className="">Student Feedback : {collage.collegeRating}</p>
                                    <p className=""> Admission Date :  {collage.admissionDate}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>

    );
};

export default MyCollageData;