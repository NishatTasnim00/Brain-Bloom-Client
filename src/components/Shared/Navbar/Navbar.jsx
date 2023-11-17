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
				darkMode ? 'bg-accent' : 'bg-[#4E6F5A] bg-opacity-90' 
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
