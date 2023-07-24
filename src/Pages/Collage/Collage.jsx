
import { useEffect, useState } from "react";
import CollageCard from "./CollageCard.jsx/CollageCard";
import useAxiosSecure from "../../CustomHook/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
const Collage = () => {
    const [collageData, setCollageData] = useState([])
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
            // fetch('http://localhost:5000/collage')
            fetch('https://collage-admission-server-psi.vercel.app/collage')
            .then(res => res.json())
            .then(data => setCollageData(data))
    }, []);


    // const { data: collageData = [], refetch } = useQuery(['collage'], async () => {
    //     const res = await axiosSecure.get('/collage')
    //     console.log(res.data)
    //     return res.data;
    // })
    // console.log(collageData)
    // const token=localStorage.getItem('access-token')
    console.log(collageData)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-12'>
                {
                    collageData.map(collage => <CollageCard
                        key={collage._id}
                        collage={collage}
                    ></CollageCard>)
                }
            </div>

        </div>
    );
};

export default Collage;