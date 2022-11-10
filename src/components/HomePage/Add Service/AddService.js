import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import header from '../../../assets/AddServiceBanner.gif'
import useSetTitle from '../../../hooks/useSetTitle';
import toast from 'react-hot-toast';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const { _id } = useLoaderData();

    // Review input form function
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const img = form.img.value;
        const serviceid = form.serviceid.value;
        const description = form.description.value;

        const review = {
            service: _id,
            price,
            title,
            ratings,
            img,
            description,
            serviceid
        }


        fetch('https://isp-service-server.vercel.app/services', {
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
                    toast('Your Service Added Successfully')

                    // window.location.reload(false);
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }
    useSetTitle('Add Service ')
    return (
        <div className='p-6 py-12 dark:bg-gray-400 dark:text-gray-900'>
            <div className='container max-w-6xl  mx-auto space-y-6 sm:space-y-12'>
                <img src={header} alt="" />

            </div>
            <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 bg-yellow-400'>
                <div>
                </div>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="title" type="text" placeholder="title" className="input p-2 input-bordered w-full bg-black text-white" />
                        <input name="ratings" type="text" placeholder="give a rating 1 to 5" className="input p-2 input-bordered w-full text-white bg-black" />
                        <input name="img" type="text" placeholder="input package image link" className="input p-2 input-bordered w-full text-white bg-black" />
                        <input name="price" type="text" placeholder="update package price" className="input p-2 bg-black text-white input-bordered w-full" />
                        <input name="serviceid" type="text" placeholder="Add an unique number" required className="input p-2 bg-black text-white input-bordered w-full" />
                    </div>
                    <br /> <textarea name="description" className="textarea p-2 textarea-bordered w-full bg-black text-white" placeholder="Type Your prefered description!!!" required></textarea>
                    <input className='btn border bg-white rounded-xl hover:bg-green-500' type="submit" value="Place Your Order" />
                </form>
            </div>
        </div>
    );
};

export default AddService;