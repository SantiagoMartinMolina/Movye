import MovieCard from '../MovieCard';
import Slider from '../Slider';
import { StyledCatalog } from './styles';
import { ImSpinner2 } from 'react-icons/im';

const Catalog = ({ movieList, isLoading, changePage }) => {
	return (
		<StyledCatalog>
			<Slider />
			<div className='container'>
				{movieList.map((movie) => {
					return <MovieCard movie={movie} key={movie.id} />;
				})}
			</div>
			<div className='load-more'>
				<button
					className='load-more-btn'
					disabled={isLoading ? true : null}
					onClick={() => changePage((n) => n + 1)}
				>
					{isLoading ? <ImSpinner2 /> : 'Load more movies'}
				</button>
			</div>
		</StyledCatalog>
	);
};

export default Catalog;
