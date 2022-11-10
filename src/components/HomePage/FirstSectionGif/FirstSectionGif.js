import React from 'react';
import img1 from '../../../assets/FirsrSection1-2.gif'
import img2 from '../../../assets/FirsrSection1.gif'

const FirstSectionGif = () => {
    return (
        <div className="hero w-full my-20 ">
            <div className="grid gap-0 md:grid-cols-2   flex-col lg:flex-row">
                <img src={img1} className="w-full" alt="" />
                <img src={img2} className="w-full" alt="" />
            </div>
        </div>
    );
};

export default FirstSectionGif;