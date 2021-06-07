import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../../components/Layout';
import ShowMovies from '../../components/ShowMovies';
import { Context } from '../../context';

const Watchlist = () => {
	const { watch } = useContext(Context);

	return (
		<>
			<Head>
				<title>Movye - Your Watchlist</title>
			</Head>
			<Layout>
				<main className='main-container'>
					<h1>Your watchlist:</h1>
					<ShowMovies array={watch} />
				</main>
			</Layout>
		</>
	);
};

export default Watchlist;
