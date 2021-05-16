import { createContext, useState } from 'react';

export const Context = createContext('default');

export const MovieContext = ({ children }) => {
	const [showMovie, setShowMovie] = useState({ show: false, movie: {} });

	return <Context.Provider value={{ showMovie, setShowMovie }}>{children}</Context.Provider>;
};
