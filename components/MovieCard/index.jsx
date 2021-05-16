import { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { Context } from '../../context';
import { StyledMovieCard } from './styles';

const MovieCard = ({ movie }) => {
	const { setShowMovie } = useContext(Context);
	const { poster_path, title, vote_average, release_date } = movie;

	const url = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'


	return (
		<StyledMovieCard>
			<div className='img-container'>
				<img src={url} alt={`${title} poster`} />
			</div>
			<div className='info'>
				<h2>{title}</h2>
				<div className='data'>
					{release_date &&
						<p>
							<BsCalendar />
							{release_date.slice(0, 4)}
						</p>}
					<p>
						<AiFillStar />
						{vote_average}
					</p>
				</div>
				<button className='btn' onClick={() => setShowMovie({ movie, show: true })}>
					Read more...
				</button>
			</div>
		</StyledMovieCard>
	);
};

export default MovieCard;
