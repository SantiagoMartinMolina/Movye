import MovieCard from '../MovieCard';
import Slider from '../Slider';
import { StyledCatalog } from './styles';
import { ImSpinner2 } from 'react-icons/im';

const Catalog = ({ movieList, isLoading, changePage }) => {
	return (
		<StyledCatalog>
			<Slider
				bgImage={
					'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
				}
			/>
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
