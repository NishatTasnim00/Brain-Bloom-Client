import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import camera from '../../../../public/brain.png';
import { DarkModeContext } from '../../../Provider/DarkMoodProvider';
import { motion } from 'framer-motion';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleLogOut = () => {
		logOut();
	};
	const navItem = (
		<>
			<li className={`${darkMode ? 'text-li-dark' : 'text-li'}`}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Home
				</NavLink>
			</li>
			<li className={`${darkMode ? 'text-li-dark' : 'text-li'}`}>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					About
				</NavLink>
			</li>
			<li className={`${darkMode ? 'text-li-dark' : 'text-li'}`}>
				<NavLink
					to="/blog"
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					Blog
				</NavLink>
			</li>
			{user && (
				<li className={`${darkMode ? 'text-li-dark' : 'text-li'}`}>
					<NavLink
						to="/Dashboard"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Dashboard
					</NavLink>
				</li>
			)}
		</>
	);
	return (
		<div
			className={`navbar px-12 py-4 fixed z-10  ${
				darkMode ? 'bg-accent' : 'bg-neutral bg-opacity-70' 
			}`}
		>
			<div className="navbar-start">
				<div className="dropdown rounded-none ">
					<label
						tabIndex={0}
						className="btn btn-ghost lg:hidden"
						onClick={handleToggle}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					{isOpen && (
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 rounded-sm w-52"
						>
							{navItem}
							<Link className="btn btn-sm btn-primary" onClick={handleLogOut}>
								Logout
							</Link>
						</ul>
					)}
				</div>
				<div>
					<div>
						<label className="swap swap-rotate">
							{/* this hidden checkbox controls the state */}
							<input type="checkbox" />

							{/* sun icon */}
						</label>
						{/* <button onClick={toggleDarkMode}>
							{darkMode ? (
								<svg
									className={`swap-on fill-current w-8 h-8 p-2  ${
										darkMode ? 'text-white' : ''
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
								</svg>
							) : (
								<svg
									className="swap-off fill-current w-8 h-8 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
								</svg>
							)}
						</button> */}
					</div>
				</div>
				<div>
					<motion.div
						animate={{
							scale: [1, 2, 2, 1, 1],
							rotate: [0, 0, 270, 270, 0],
							borderRadius: ['20%', '20%', '50%', '50%', '20%'],
						}}
					>
						<img className="h-10 -mt-2" src={camera} alt="" />
					</motion.div>
				</div>

				<a
					className={`normal-case text-xl ${
						darkMode ? 'text-gray-300' : 'text-gray-300'
					}`}
				>
					LensCrafters
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="flex gap-4 px-1">{navItem}</ul>
			</div>
			<div className="navbar-end gap-5">
				{user ? (
					<>
						<Link
							className="btn primary-btn hidden lg:flex"
							onClick={handleLogOut}
						>
							Logout
						</Link>
						<div>
							<figure className="w-12 h-12 rounded-full bg-black overflow-hidden">
								<img src={user.photoURL} />
							</figure>
						</div>
					</>
				) : (
					<Link to="/login" className="btn btn-primary">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
