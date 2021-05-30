import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MovieCard from '../MovieCard';
import { StyledShowMovies } from './styles';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FcBinoculars } from 'react-icons/fc';

const ShowMovies = ({ array }) => {
	const router = useRouter();
	const path = router.pathname.slice(1);
	const [movies, setMovies] = useState([]);
	const [index, setIndex] = useState(20);
	const [showMessage, setShowMessage] = useState(false);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		setMovies(array.slice(0, index));
	}, [array, index]);

	useEffect(() => {
		if (index < array.length - 1) {
			setShowButton(true);
		}
	}, [array]);

	const handleClick = () => {
		setIndex((index) => {
			if (index + 10 > array.length) {
				setShowMessage(true);
				return array.length;
			} else {
				return index + 10;
			}
		});
	};

	return (
		<StyledShowMovies>
			{array.length > 0 ? (
				<>
					<div className='card-container'>
						{movies.map((movie) => (
							<MovieCard movie={movie} key={movie.id || Math.random() * 1000} />
						))}
					</div>
					{array.length > 0 && showButton && (
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
						<p>There aren't any movies in your {path}.</p>
					</div>
					<button onClick={() => router.push('/')}>Go back to the catalog</button>
				</div>
			)}
		</StyledShowMovies>
	);
};

export default ShowMovies;
