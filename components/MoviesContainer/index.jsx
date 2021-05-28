import { StyledMovieContainer } from './styles';
import { BsExclamationTriangle } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import MovieCard from '../MovieCard';
import Spinner from '../Spinner';

const MovieContainer = ({ movies, showMessage, isLoading, setPageNumber, moviesLoaded }) => {
	return (
		<StyledMovieContainer>
			<div className='card-container'>
				{movies.length > 0 ? (
					movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
				) : moviesLoaded ? (
					<p className='message'>
						<BsExclamationTriangle />
						No movies found.
					</p>
				) : (
					<Spinner />
				)}
			</div>
			{movies.length > 0 && (
				<div className='load-more'>
					{!showMessage ? (
						<button
							className='load-more-btn'
							disabled={isLoading ? true : null}
							onClick={() => setPageNumber((n) => n + 1)}
						>
							{isLoading ? <ImSpinner2 /> : 'Load more movies'}
						</button>
					) : (
						<p className='message'>
							<BsExclamationTriangle />
							No more results
						</p>
					)}
				</div>
			)}
		</StyledMovieContainer>
	);
};

export default MovieContainer;
