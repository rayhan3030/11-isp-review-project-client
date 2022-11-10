import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://isp-service-server.vercel.app/services3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useSetTitle('Services')
    return (
        <div>
            <div className='text-center'>
                <p className='text-4xl font-bold text-orange-400 my-5'> Top Packages </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='flex justify-center m-5'>
                <Link to="/services">
                    <button className="px-8 py-3 font-semibold rounded-full dark:bg-gray-400 dark:text-gray-800 hover:bg-yellow-500">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;