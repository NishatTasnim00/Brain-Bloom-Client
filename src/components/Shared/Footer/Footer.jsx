import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
			<footer className="bg-[#4E6F5A] md:h-96 grid content-center">
				<div >
					<section className="w-full max-w-6xl mx-auto text-gray-300 space-y-14 md:grid grid-cols-4 gap-7 justify-center p-5">
						<div className="text-center md:text-start pt-10">
							<div className="flex">
								<img
									className="pb-5 h-14 mr-4 md:ml-0"
									src="/public/Images/donut.png"
									alt=""
								></img>
								<p className="font-poppins">
									Welcome to Yummy Bytes- the ultimate destination for food
									lovers! We're passionate about creating delicious,
									high-quality dishes using only the freshest ingredients.
								</p>
							</div>
						</div>
						<div className="text-center md:text-start">
							<h3 className="text-gray-300 font-ebgara font-extrabold text-2xl pb-5">
								Usefull Link
							</h3>
							<ul className="list-none font-poppins space-y-2">
								<li>
									<NavLink
										to="/"
										aria-label="Home"
										title="Home"
										
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										aria-label="About Us"
										title="About"
										
									>
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/blog"
										aria-label="Blog"
										title="Blog"
										
									>
										Blog
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="space-y-2 text-center md:text-start">
							<h3 className="text-gray-300 font-ebgara font-extrabold text-2xl pb-5">
								Contact Now
							</h3>
							<p className="font-poppins">
								55, Banani
								<br />
								Dhaka, Bangladesh
							</p>
							<p className="font-poppins">+88 01750 000 000</p>
							<p className="font-poppins">info@gmail.com</p>
						</div>
						<div className="space-y-2 text-center md:text-start">
							<h3 className="text-gray-300 font-ebgara font-extrabold text-2xl pb-5">
								Subscribe
							</h3>
							<p className="font-poppins">
								Subscribe for our latest & Articles. We Won’t Give You Spam
								Mails
							</p>

							<div className="flex relative">
								<input
									type="text"
									id="website-admin"
									className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-44 max-w-600 text-sm p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Email Address"
								></input>
								<span className="absolute right-0 top-0 bottom-0 inline-flex items-center px-8 text-sm text-gray-900 bg-dark-amber border border-r-0 border-gray-300  rounded-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 p-1">
									<i className="fill-dark-amber text-gray-300 fa-solid fa-location-arrow fa-xl"></i>
								</span>
							</div>
						</div>
					</section>
				</div>
                <hr  className='w-10/12 mx-auto my-5'/>
                <p className='text-center text-white'>@all right reserved by brain bloom</p>
			</footer>
		);
};

export default Footer;