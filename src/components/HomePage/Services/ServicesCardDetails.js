import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../../hooks/useSetTitle';
import ReviewsAll from '../Reviews/ReviewsAll';

const ServicesCardDetails = () => {

    const { user, loading } = useContext(AuthContext);
    const { title, img, description, price, ratings, _id } = useLoaderData();

    // Review input form function
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fristName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistred";
        const photoUrl = form.photoUrl.value;
        const id = form.id.value;
        const reviews = form.reviews.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            photoUrl,
            reviews,
            id
        }

        fetch('https://isp-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    //should use toast
                    toast('Review Posted Successfully')
                    window.location.reload(false);
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }
    useSetTitle('Services')
    return (
        <section className="dark:bg-yellow-500 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl text-yellow-500">{title}</h3>
                        <span className="text-lg dark:text-gray-400">Monthly at :{price}</span> <br />
                        <span className="text-lg dark:text-gray-400">Rating Star {ratings}</span>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                </div>
            </div>
            <div>
                <ReviewsAll></ReviewsAll>
            </div>
            {/* // Form Section which will be a conditional rendering */}
            {user?.email ?
                <>
                    <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
                        <form onSubmit={handleReview}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <input name="fristName" type="text" placeholder="First Name" className="input input-bordered w-full bg-violet-700" />
                                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full bg-violet-700" />
                                <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered w-full bg-violet-700" />
                                <input name="email" type="text" placeholder="email" defaultValue={user?.email} readOnly className="input bg-violet-700 input-bordered w-full" />
                                <input name="id" type="text" placeholder="service id" defaultValue={_id} readOnly className="input bg-violet-700 input-bordered w-full" />
                            </div>
                            <br /> <textarea name="reviews" className="textarea textarea-bordered w-full bg-black text-white" placeholder="Type Your Review Here!!!" required></textarea>
                            <input className='btn border bg-black rounded-xl hover:bg-green-500' type="submit" value="Place Your Order" />
                        </form>
                    </div>
                </>
                :
                <>
                    <div className='text-center'>
                        <p className='text-4xl font-bold text-purple-800  my-5'> Please <Link className='text-black' to="/login">Login</Link> to Add Your Review </p>
                    </div>
                </>

            }
        </section>


    );
};

export default ServicesCardDetails;