import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { img, price, title, ratings, description, _id } = service;
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Ratings of this package: {ratings} </Link>
                </div>

            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>


                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold dark:text-yellow-400">{title}</h3>
                    <h3 className="text-lg font-semibold dark:text-violet-400">Subscription: {price}</h3>

                    {description.length > 110 ?
                        <p className=" dark:text-gray-400">{description.substring(0, 100) + '...'}</p>
                        :
                        <p>{description}</p>
                    }
                </div>
                <Link to={`/services/${_id}`}>
                    <button type="button" className="px-8 py-3 font-semibold border btn-ghost hover:bg-yellow-600 rounded dark:border-gray-100 dark:text-gray-100">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;