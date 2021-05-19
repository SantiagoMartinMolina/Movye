import Hero from '../Hero';
import MovieContainer from '../MoviesContainer';

const Catalog = ({ movieList, isLoading, changePage, showMessage, moviesLoaded }) => {
	return (
		<main>
			<Hero />
			<MovieContainer
				movies={movieList}
				showMessage={showMessage}
				isLoading={isLoading}
				setPageNumber={changePage}
				moviesLoaded={moviesLoaded}
			/>
		</main>
	);
};

export default Catalog;
