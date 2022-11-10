import React from 'react';
import useSetTitle from '../../../../hooks/useSetTitle';
import Banner from '../../Banner/Banner';
import FirstSectionGif from '../../FirstSectionGif/FirstSectionGif';
import LatestOffer from '../../FirstSectionGif/LatestOffer';
import SecondSectionGif from '../../SecondSectionGif/SecondSectionGif';
import Services from '../../Services/Services';

const Home = () => {
    useSetTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FirstSectionGif></FirstSectionGif>
            <LatestOffer></LatestOffer>
            <SecondSectionGif></SecondSectionGif>

        </div>
    );
};

export default Home;