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
                    <p>Our Admission Start Date : {admissionDate.start_date}</p>
                    <p>Our Admission End Date : {admissionDate.end_date}</p>
                    <p>number of the research : {numberOfResearch}</p>
                    <h1>Our research History :{research.map(example => <li key={example}> {example}</li>)} </h1>
                    <h1 className='text-right'> <span className='font-semibold'>Our Event :</span>  {events.map(e=> <p>{e.eventName}</p>)}</h1>
                    <h1> <span className='font-semibold'>Our Sports  :</span> {sports.map(e=> <li>{e.sportName}</li>)}</h1>
                    <div className="card-actions justify-end">
                        <Link state={collage} to='/collage-details'>
                            <button className="btn btn-primary">Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CollageAllDetails;