import { useContext } from 'react';
import Layout from '../../components/Layout';
import ShowMovies from '../../components/ShowMovies';
import { Context } from '../../context';

const Favorites = () => {
	const { fav } = useContext(Context);

	return (
		<Layout>
			<main className='main-container'>
				<h1>Your favorite movies:</h1>
				<ShowMovies array={fav} />
			</main>
		</Layout>
	);
};

export default Favorites;
