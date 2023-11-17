import { Audio } from 'react-loader-spinner';
import React, { useState } from 'react';
import img from "../../loading.json"
import Lottie from 'lottie-react';

const Loader = () => {
    return (
			<div className='min-h-screen flex justify-center items-center'>
				{/* <Audio
					height="80"
					width="80"
					radius="9"
					color="green"
					ariaLabel="loading"
					wrapperStyle
					wrapperClass
				/> */}
				<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				<Lottie className="h-96" animationData={img} loop={true} />
			</div>
			</div>
		);
};

export default Loader;