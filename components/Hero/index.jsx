import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { StyledHero } from './styles';
import { BsCalendar } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { movies } from '../../utils/movies';

const Hero = () => {
	const { setShowMovie } = useContext(Context);
	const [idx, setIdx] = useState(0);
	const [movie, setMovie] = useState(movies[idx]);
	const { title, release_date, overview, poster_path, vote_average } = movie;

	useEffect(() => {
		setIdx(Math.round(Math.random() * (movies.length - 1)));
	}, []);

	useEffect(() => {
		setMovie(movies[idx]);
	}, [idx]);

	return (
		<StyledHero bgImage={poster_path} onClick={() => setShowMovie({ movie, show: true })}>
			<div className='info'>
				<h1>{title}</h1>
				<div className='data'>
					<p>
						<BsCalendar />
						{release_date}
					</p>
					<p>
						<AiFillStar />
						{vote_average}
					</p>
				</div>
				<p className='description'>{overview}</p>
			</div>
		</StyledHero>
	);
};

export default Hero;
