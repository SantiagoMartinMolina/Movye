import { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { BiCameraMovie } from 'react-icons/bi';
import { TiMinus } from 'react-icons/ti';
import { Context } from '../../context';
import { StyledMovieCard } from './styles';

const MovieCard = ({ movie }) => {
	const { fav, setFav, watch, setWatch, setShowMovie } = useContext(Context);
	const { poster_path, title, vote_average, release_date } = movie;
	const [isFavorite, setIsFavorite] = useState(false);
	const [isInWatchlist, setIsInWatchlist] = useState(false);

	useEffect(() => {
		setIsFavorite(fav?.some((f) => f.id === movie.id));
		setIsInWatchlist(watch?.some((f) => f.id === movie.id));
	}, [fav, watch]);

	const url = poster_path
		? `https://image.tmdb.org/t/p/w500/${poster_path}`
		: 'https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80';

	const addToLocalStorage = (key) => {
		let array = JSON.parse(localStorage.getItem(key));
		array.push(movie);
		localStorage.setItem(key, JSON.stringify(array));
		key === 'favorites' ? setFav(array) : setWatch(array);
	};

	const removeFromLocalStorage = (key) => {
		let array = JSON.parse(localStorage.getItem(key));
		array = array.filter((m) => m.id !== movie.id);
		localStorage.setItem(key, JSON.stringify(array));
		key === 'favorites' ? setFav(array) : setWatch(array);
	};

	const handleClick = (key) => {
		if (key === 'favorites') {
			if (isFavorite) {
				removeFromLocalStorage(key);
				setIsFavorite(false);
			} else {
				addToLocalStorage(key);
				setIsFavorite(true);
			}
		} else {
			if (isInWatchlist) {
				removeFromLocalStorage(key);
				setIsInWatchlist(false);
			} else {
				addToLocalStorage(key);
				setIsInWatchlist(true);
			}
		}
	};

	return (
		<StyledMovieCard>
			<div className='img-container'>
				<img src={url} alt={`${title} poster`} />
			</div>
			<div className='collections-container'>
				<button onClick={() => handleClick('watchlist')}>
					<BiCameraMovie />
					<span>{isInWatchlist ? <TiMinus /> : '+'}</span>
				</button>
				<button onClick={() => handleClick('favorites')}>
					<HiOutlineHeart />
					<span>{isFavorite ? <TiMinus /> : '+'}</span>
				</button>
			</div>
			<div className='info'>
				<h2>{title}</h2>
				<div className='data'>
					{release_date && (
						<p>
							<BsCalendar />
							{release_date.slice(0, 4)}
						</p>
					)}
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
