import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("service.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    
    return (
        <div>
            <h1 className='text-primary text-center services-title mt-5 mb-3'>Our Services</h1>
           <div className='container services'>
           {
                services.map(service=><Service
                key={service.id}
                service={service}
                >
                </Service>)
            }
           </div>
        </div>
    );
};

export default Services;