import React from 'react'
import Lottie from 'react-lottie';
import loader from '../../assets/loader.json';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        renderSettings:{
            preserveAspectRatio: 'zMidYMid slide'
        },
    };
    return <Lottie options={defaultOptions} />;
};

export default Loader;