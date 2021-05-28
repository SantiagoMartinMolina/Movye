import { createContext, useEffect, useState } from 'react';

export const Context = createContext('default');

export const MovieContext = ({ children }) => {
	const [fav, setFav] = useState([]);
	const [watch, setWatch] = useState([]);
	const [showMovie, setShowMovie] = useState({ show: false, movie: {} });
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		setFav(JSON.parse(localStorage.getItem('favorites')));
		setWatch(JSON.parse(localStorage.getItem('watchlist')));
	}, []);

	return (
		<Context.Provider
			value={{ showMovie, setShowMovie, genres, setGenres, fav, setFav, watch, setWatch }}
		>
			{children}
		</Context.Provider>
	);
};
