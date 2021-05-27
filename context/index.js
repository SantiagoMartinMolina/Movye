import { createContext, useEffect, useState } from 'react';

export const Context = createContext('default');

export const MovieContext = ({ children }) => {
	const [fav, setFav] = useState([]);
	const [showMovie, setShowMovie] = useState({ show: false, movie: {} });
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		setFav(JSON.parse(localStorage.getItem('favorites')));
	}, [])

	console.log(fav);

	return <Context.Provider value={{ showMovie, setShowMovie, genres, setGenres, fav, setFav }}>{children}</Context.Provider>;
};

