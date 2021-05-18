import Hero from '../Hero';
import { StyledCatalog } from './styles';
import MovieContainer from '../MoviesContainer';

const Catalog = ({ movieList, isLoading, changePage, showMessage }) => {
	return (
		<StyledCatalog>
			<Hero />
			<MovieContainer
				movies={movieList}
				showMessage={showMessage}
				isLoading={isLoading}
				setPageNumber={changePage}
			/>
		</StyledCatalog>
	);
};

export default Catalog;
