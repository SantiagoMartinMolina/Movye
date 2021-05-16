import { createContext, useState } from 'react';

export const Context = createContext('default');

export const MovieContext = ({ children }) => {
	const [showMovie, setShowMovie] = useState({ show: false, movie: {} });
	const [genres, setGenres] = useState([]);

	return <Context.Provider value={{ showMovie, setShowMovie, genres, setGenres }}>{children}</Context.Provider>;
};
