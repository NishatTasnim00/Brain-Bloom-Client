import React from 'react';

const Title = ({heading, subheading}) => {
    return (
			<div className="text-center lg:py-12 dark-text-base-100 mt-5 uppercase">
				<h1 className="text-3xl lg:text-5xl font-bold pb-5">{heading}</h1>
				<p className="font-bold text-gray-500">{subheading}</p>
			</div>
		);
};

export default Title;