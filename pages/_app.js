import Head from 'next/head';
import '../styles/globals.css';
import { MovieContext } from '../context';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		let favorites = JSON.parse(localStorage.getItem('favorites'));
		let watchlist = JSON.parse(localStorage.getItem('watchlist'));

		!favorites && localStorage.setItem('favorites', JSON.stringify([]));
		!watchlist && localStorage.setItem('watchlist', JSON.stringify([]));
	}, []);

	return (
		<>
			<Head>
				<link rel='shortcut icon' href='Movye-logo.png' type='image/png' />
			</Head>
			<MovieContext>
				<Component {...pageProps} />
			</MovieContext>
		</>
	);
}

export default MyApp;
