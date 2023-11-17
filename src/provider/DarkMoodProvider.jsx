import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
    // console.log(darkMode);

	const toggleDarkMode = () => {
		setDarkMode((prevState) => !prevState);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};
