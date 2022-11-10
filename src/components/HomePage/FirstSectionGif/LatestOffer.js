import React from 'react';
import offer from '../../../assets/latestOffer.jpg'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const LatestOffer = () => {
    return (
        <div className='text-center'>
            {/* <h1 className='text-5xl font-semibold my-10'> ⌛ See Latest offers ⌛</h1>
            <img src={offer} className="w-50 h-50 mx-auto" alt="" /> */}
            <PhotoProvider>
                <PhotoView src={offer}>
                    <img src={offer} alt="" className='mx-auto' />
                </PhotoView>
            </PhotoProvider>

        </div>
    );
};

export default LatestOffer;