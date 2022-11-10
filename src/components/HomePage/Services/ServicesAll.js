import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import ServicesCard from './ServicesCard';

const ServicesAll = () => {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://isp-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setServices(data)

            })
    }, [])
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1>{services.length}</h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default ServicesAll;