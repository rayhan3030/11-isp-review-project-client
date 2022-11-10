import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle';
import ReviewsAllInformation from './ReviewsAllInformation';

const ReviewsAll = () => {
    const [reviews, setReviews] = useState([])
    const { _id } = useLoaderData();



    useEffect(() => {
        fetch(`https://isp-service-server.vercel.app/review?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])
    // useSetTitle('Services')

    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 dark:bg-gray-800 dark:text-gray-100">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr><th>
                    </th>
                        <th>User Info</th>
                        <th>Package/Service Info</th>
                        <th>Review Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <ReviewsAllInformation
                            key={review._id}
                            review={review}
                        ></ReviewsAllInformation>)
                    }
                </tbody>

            </table>

        </div>
    );
};

export default ReviewsAll;