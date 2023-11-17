import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
// import groovyWalkAnimation from './groovyWalk.json';
import img  from '../../../error.json'

const ErrorPage = () => {
	const {error, status } = useRouteError();
	console.log(error);
	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="flex flex-col items-center justify-center px-5 mx-auto my-8 py-20 lg:py-0">
				{/* <FontAwesomeIcon
					icon={faFaceFrown}
					size="9x"
					className="text-pink-300"
				/> */}
				{/* ......................<Lottie animationData={groovyWalkAnimation} /> */}

				<Lottie className="h-60" animationData={img} loop={true} />

				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-5xl lg:text-9xl text-purple-300">
						<span className="sr-only">Error</span> {status || 404}
					</h2>
					<p className="text-2xl font-semibold md:text-3xl mb-8 text-gray-500">
						{error?.message}
					</p>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-pink-300 text-gray-900"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
