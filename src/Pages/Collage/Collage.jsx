
import { useEffect, useState } from "react";
import CollageCard from "./CollageCard.jsx/CollageCard";

const Collage = () => {
    const [collageData, setCollageData] = useState([])
    useEffect(() => {
        fetch('/src/Pages/Collage/collageData.json')
            .then(res => res.json())
            .then(data => setCollageData(data))
    }, []);
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