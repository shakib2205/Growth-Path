import { useEffect, useState } from "react";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
    const [service, setService] = useState([]);
    useEffect (()=> {
        fetch('service.json')
        .then( res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <div className="flex justify-between py-10 mx-12">
                <h3 className="text-2xl font-bold text-green-600">Our Expertise</h3>
                <p>We Are Specialized In The Following Services</p>
            </div>
            <div className="grid grid-cols-3 py-6">
                {
                    service.map(item => <ExpertiseCard
                    key={item._id}
                    item={item}
                    ></ExpertiseCard>)
                }
            </div>

        </div>
    );
};

export default Expertise;