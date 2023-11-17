import React from 'react';
import bb from '../../assets/education.png';
const Banner = () => {
	return (
		<>
			<div
				className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 bg-gradient-to-t from-gray-900 to-transparent bg-no-repeat bg-center bg-cover -mt-5 lg:mx-0"
				loading="lazy"
				style={{ backgroundImage: "url('https://i.ibb.co/3MBkG07/education-day-arrangement-table-with-copy-space.jpg')" }}
			>
				<div className="lg:h-[600px] lg:w-2/4  text-left">
					<h1 className="text-4xl font-extrabold lg:text-7xl lg:font-bold  lg:pt-10">
						<span
							
						>
							 Empowering Minds, Igniting Futures
						</span>
					</h1>
					<p className="text-lg font-medium  text-purple-100 py-6  bg-black bg-opacity-60 rounded-lg lg:bg-opacity-0 mt-5 lg:mt-0">
					Discover, Learn, Succeed: The Ultimate Educational Adventure. Embark on a Journey of Transformative Learning: Your Destination for Comprehensive Education, Personal Growth, and Future Success
					</p>
				</div>
			</div>
		</>
	);
};

export default Banner;
