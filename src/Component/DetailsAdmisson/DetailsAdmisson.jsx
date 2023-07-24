import React from 'react';
import { useLocation } from 'react-router-dom';
import CollageEventHomePage from '../CollageEventHomePage/CollageEventHomePage';
import CollageSportsHomepage from '../CollageSportsHomepage/CollageSportsHomepage';

const DetailsAdmisson = () => {
    const collageData = useLocation();
    const collage = collageData.state;
    console.log(collage)
    return (
        <div className='px-5 my-8'>
            <h1 className='text-4xl text-center my-8'>Details Admisson</h1>
            <div className="card w-full mb-5 bg-base-100 shadow-xl image-full">
                    <figure className='h-60 w-full overflow-hidden'><img src={collage.collegeImage} className='w-full rounded-md ' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-2xl text-center font-semibold mt-8">{collage.collegeName}</h2>
                    </div>
                </div>
            <div className='flex gap-16 flex-col md:flex-row justify-center items-center'>
               
                <div>
                    <div className='flex flex-col md:flex-row gap-8 mx-auto justify-center'>
                        <div className='w-full md:w-1/2'>
                            <h1 className='text-xl underline mb-4'>Admission Process </h1>
                            {
                                collage.required_documents.map((req, index) => <p>{index + 1} : {req}</p>)
                            }
                        </div>
                        <div className='text-end'>
                            <h1 className='text-xl underline mb-4'>Our Research Work </h1>
                            {
                                collage.researchWork.map(work => <p> {work}</p>)
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl underline mb-4'>Event Related Info : </h1>
                        {
                            collage.events?.map(collageEvent => <CollageEventHomePage
                                key={collageEvent.eventName}
                                collageEvent={collageEvent}
                            ></CollageEventHomePage>)
                        }
                    </div>
                    <div className='text-end'>
                        <h1 className='text-xl underline mb-4 '>Sports Related Info : </h1>
                        {
                            collage.sports?.map(collageSport => <CollageSportsHomepage
                                key={collageSport.sportName}
                                collageSport={collageSport}
                            ></CollageSportsHomepage>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsAdmisson;