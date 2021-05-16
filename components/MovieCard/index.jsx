import { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { Context } from '../../context';
import { StyledMovieCard } from './styles';

const MovieCard = ({ movie }) => {
	const { setShowMovie } = useContext(Context);
	const { medium_cover_image, title, rating, year } = movie;
	return (
		<StyledMovieCard>
			<div className='img-container'>
				<img src={medium_cover_image} alt={`${title} poster`} />
			</div>
			<div className='info'>
				<h2>{title}</h2>
				<div className='data'>
					<p>
						<BsCalendar />
						{year}
					</p>
					<p>
						<AiFillStar />
						{rating}
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
