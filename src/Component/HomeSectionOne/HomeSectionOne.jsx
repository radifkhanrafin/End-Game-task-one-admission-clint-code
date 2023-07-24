import React, { useEffect, useState } from 'react';
import CollageCard from '../../Pages/Collage/CollageCard.jsx/CollageCard';
import CollageAllDetails from './CollageDetails/CollageAllDetails';

const HomeSectionOne = () => {
    const [collageData, setCollageData] = useState([])

    useEffect(() => {
        // fetch('http://localhost:5000/collage')
        fetch('https://collage-admission-server-psi.vercel.app/collage')
            .then(res => res.json())
            .then(data => setCollageData(data))
    }, []);
    console.log(collageData)
    return (
        <div>
            <div className='grid grid-cols-1  gap-4  mt-12'>
                {
                    collageData?.map(collage => <CollageAllDetails
                        key={collage._id}
                        collage={collage}
                    ></CollageAllDetails>)
                }
            </div>

        </div>
    );
};

export default HomeSectionOne;