import React from 'react';
import { Link } from "react-router-dom";
const CollageCard = ({ collage }) => {
    const { admissionDate, collegeImage, collegeName, collegeRating, events, numberOfResearch, photoGallery, sports } = collage;
    return (
        <div className="card w-96 glass">
            <figure><img src={collegeImage} className='h-80' alt="Collage" /></figure>
            <div className="card-body capitalize">
                <h2 className="card-title">{collegeName}</h2>
                <p>Rating : {collegeRating}</p>
                <p>Our Admission Date : {admissionDate.end_date}</p>
                <p>number of the research : {numberOfResearch}</p>
                <div className="card-actions justify-end">
                    <Link state={collage} to='/collage-details'>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CollageCard;