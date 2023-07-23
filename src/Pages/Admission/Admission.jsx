import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {

    const [gpa, setGpa] = useState()
    const [collageData, setCollageData] = useState([])

    const calculateGpa = (event) => {
        event.preventDefault()
        const form = event.target;
        const ssc = parseFloat(form.ssc.value);
        const hsc = parseFloat(form.hsc.value);
        console.log(ssc, hsc)
        if (ssc >5 || hsc > 5 || ssc == ''|| hsc == '') {
            setGpa('input a valid gpa')
            return
        }
        setGpa(ssc + hsc)


    }

    useEffect(() => {
        fetch('http://localhost:5000/collage')
            .then(res => res.json())
            .then(data => setCollageData(data))
    }, []);
    console.log(collageData)

    return (
        <div>

            <div className='bg-sky-100 py-8 px-3'>
               <h3 className='text-2xl font-semibold text-center mb-5'> Calculate Your GPA</h3>
                <form onSubmit={calculateGpa} className='flex justify-evenly items-center'>
                    <input className='input form-control bg-slate-200 ' name='ssc' placeholder='Input Your SSC GPA' required  type="text" />
                    <input className='input form-control bg-slate-200 ' name='hsc' placeholder='Input Your HSC GPA'  required type="text" />
                    <input type="submit" value='Calculate' className='btn btn-outline w-52' />
                    <p className='bg-slate-100 px-4 py-2 font-semibold min-w-44 rounded-md'>Your Total GPA : {gpa}</p>
                </form>
            </div>

<div>
    <h1 className='text-2xl font-semibold text-center my-5'> Collage List</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-3 '>
                {
                    collageData?.map(collage =>
                        <div className='border-2 px-3 pb-3 rounded-md bg-slate-200'>
                            <Link state={collage} to='/admissionform'> <h2 className=' rounded-md font-semibold mt-3 h-16 text-2xl link-hover'>{collage.collegeName}</h2></Link>

                            <p className='font-semibold mt-3'>Minimun GPA for SSC  : {collage.minGpaSsc}</p>
                            <p className='font-semibold'>Minimun GPA for HSC : {collage.minGpaHsc}</p>
                            <p className='font-semibold'>Total GPA : <span className='text-fuchsia-500'>{collage.totalGpa}</span></p>
                            <p className='font-semibold'>To Admit Click <Link  state={collage} to='/admissionform' className='text-blue-600 link'>Here</Link></p>

                        </div>

                    )
                }
            </div> 
</div>
           
          
        </div>
    );
};

export default Admission;