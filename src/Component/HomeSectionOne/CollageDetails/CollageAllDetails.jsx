import React from 'react';
import { Link } from 'react-router-dom';

const CollageAllDetails = ({ collage }) => {
    const { admissionDate, collegeImage, collegeName, research, collegeRating, events, numberOfResearch, photoGallery, sports } = collage;
    const evv=events.map(e=>console.log(e.eventName))
    // console.log(evv.eventName)
    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className="hero-content flex-col lg:flex-row">
                <figure><img src={collegeImage} className='h-80 w-[600px]' alt="Collage" /></figure>
                <div className="card-body capitalize">
                    <h2 className="card-title">{collegeName}</h2>
                    <p> <span  className='font-semibold'>Our Admission Start Date : </span> {admissionDate.start_date}</p>
                    <p> <span  className='font-semibold'>Our Admission End Date :</span>  {admissionDate.end_date}</p>
                    <p> <span  className='font-semibold'>number of the research :</span> {numberOfResearch}</p>
                    <h1><span  className='font-semibold'>Our research History :</span>{research.map(example => <li key={example}> {example}</li>)} </h1>
                    <h1 className='text-right'> <span className='font-semibold'>Our Event :</span>  {events.map(e=> <p>{e.eventName}</p>)}</h1>
                    <h1> <span className='font-semibold'>Our Sports  :</span> {sports.map(e=> <li>{e.sportName}</li>)}</h1>
                    <div className="">
                        <Link state={collage} to='/detailsadmisson'>
                            <button className="btn btn-outline w-full ">About Collage</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CollageAllDetails;