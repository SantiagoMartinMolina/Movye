import { useRouter } from 'next/router';
import MovieCard from '../MovieCard';
import { StyledShowMovies } from './styles';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FcBinoculars } from 'react-icons/fc';

const ShowMovies = () => {
	const router = useRouter();
	const { fav } = useContext(Context);

	const [movies, setMovies] = useState([]);
	const [index, setIndex] = useState(20);
	const [showMessage, setShowMessage] = useState(false);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		setMovies(fav.slice(0, index));
	}, [fav, index]);

	useEffect(() => {
		if (index < fav.length - 1) {
			setShowButton(true);
		}
	}, [fav]);

	const handleClick = () => {
		setIndex((index) => {
			if (index + 10 > fav.length) {
				setShowMessage(true);
				return fav.length;
			} else {
				return index + 10;
			}
		});
	};

	return (
		<StyledShowMovies>
			{fav.length > 0 ? (
				<>
					<div className='card-container'>
						{movies.map((movie) => (
							<MovieCard movie={movie} />
						))}
					</div>
					{fav.length > 0 && showButton && (
						<div className='load-more'>
							{!showMessage ? (
								<button className='load-more-btn' onClick={handleClick}>
									Load more movies
								</button>
							) : (
								<p className='message'>
									<BsExclamationTriangle />
									No more results
								</p>
							)}
						</div>
					)}
				</>
			) : (
				<div className='no-movies'>
					<div className='flex'>
						<FcBinoculars />
						<p>It seems we can't find any movies in your favorites!</p>
					</div>
					<button onClick={() => router.push('/')}>Go back to the catalog</button>
				</div>
			)}
		</StyledShowMovies>
	);
};

export default ShowMovies;
