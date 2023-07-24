import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../CustomHook/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { useQuery } from 'react-query';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const MyCollage = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [mysubmission, setMysubmission] = useState([])
 

    // const { data: mysubmission = [], refetch, isLoading: loadingSubmission } = useQuery(['myadmissionInfo'], async () => {
    //     const res = await axiosSecure.get(`/myadmissionInfo/${user?.email}`)
    //     // console.log(res.data)
    //     return res.data;
    // })

    useEffect(() => {
        // fetch(`http://localhost:5000/myadmissionInfo/${user?.email}`)
        fetch(`https://collage-admission-server-psi.vercel.app/myadmissionInfo/${user?.email}`)
            .then(res => res.json())
            .then(data => setMysubmission(data))
    }, []);
  

    console.log(mysubmission)

    return (
        <div>
            <h1 className='text-3xl mt-12 text-center font-semibold mb-5'>Here is information about each college you applied to</h1>
            <p className='flex items-center'>
                <span className='bg-red-800 text-white px-5 w-28 rounded-se-full rounded-bl-full py-2'>Notice : </span>
                <Marquee>
                    আগামীকাল বিকেলে আবেদনের ফল প্রকাশ করা হবে** / Application result will be announced tomorrow afternoon
                </Marquee>
               
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    mysubmission.map(application =>
                        <div key={application._id} className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={application.collegeImage} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-semibold text-center">{application.collage}</h2>
                                <p>Application Status : {application.status}</p>
                               <Link state={application} to='/mycollagedata'> <button className='btn btn-outline border-white text-white w-3/4 mx-auto'> About Collage</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyCollage;