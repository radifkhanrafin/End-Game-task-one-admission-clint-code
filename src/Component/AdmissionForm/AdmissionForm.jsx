import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import Swal, {  } from "sweetalert2";
const AdmissionForm = () => {
    const {user}=useContext(AuthContext)
    const collageData = useLocation();
    const collage = collageData.state
    console.log(collage)

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        // console.log(data)
        const admissionInfo = {
            collage: data.collage,
            subject: data.subject,
            candidate: data.candidate,
            candidateEmail: data.email,
            candidateAddress: data.address,
            candidateNumber: data.number,
            candidateBirthday: data.birthday,
            candidateimage: data.image,
            collegeImage:collage.collegeImage,
            college_id:collage._id,
            status: "Pending"
        }
        console.log(admissionInfo)
        // fetch('http://localhost:5000/admissionInfo', {
        fetch('https://collage-admission-server-psi.vercel.app/admissionInfo', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admissionInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('data', data)
                    Swal.fire('Submission Complete')
                    reset()
                }

            })

    };
    return (
        <div className=' mt-12 bg-gray-300 p-6 rounded-md'>
            <h1 className='text-center font-semibold text-3xl mb-6 '>Collage Admission Form</h1>
            <form className='space-y-8 w-full '
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="text">Collage</label>
                        <input
                            className="input input-bordered w-full "
                            {...register("collage", { required: true })}
                            placeholder="collage"
                            defaultValue={collage.collegeName}
                        />
                    </div>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="text"> Select Subject</label>
                        <select className="input input-bordered w-full" {...register("subject")}
                            defaultValue={''}
                            placeholder='Section'
                        >
                            <option value="science">Science</option>
                            <option value="art">Art </option>
                            <option value="commerce">Commerce</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="">Enter Your Name</label>
                        <input
                            className="input input-bordered w-full"
                            {...register("candidate", { required: true })}
                            placeholder="Your Name"
                            type="text"
                        />
                    </div>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="">Enter Your Email</label>
                        <input
                            className="input input-bordered w-full"
                            {...register("email", { required: true })}
                            placeholder="Your email"
                            defaultValue={user?.email}
                            readOnly
                            type="text"
                        />

                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="">Enter Your Address</label>
                        <input
                            className="input input-bordered w-full "
                            {...register("address")}
                            placeholder="Your Current Address"
                        />
                    </div>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="">  Contact Number</label>
                        <input
                            className="input input-bordered w-full "
                            {...register("number")}
                            placeholder=" Contact Number"
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor="">Date Of Birth</label>
                        <input
                            className="input input-bordered w-full "
                            {...register("birthday")}
                            type='date'
                            placeholder=""
                        />
                    </div>
                    <div className='w-full'>
                        <label className='pl-4 font-semibold mb-3' htmlFor=""> Cantidate Passport Size Image</label>
                        <input
                    className="input input-bordered w-full "
                    {...register("image")}
                    placeholder="Your Image URL"
                />
                    </div>
                </div>
                
                <input className="submit-btn btn w-full" value="Submit" type="submit" />
            </form>
        </div>
    );
};

export default AdmissionForm;