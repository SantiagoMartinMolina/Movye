import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { StyledModal } from './styles.jsx';
import { AiFillStar } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { BiCameraMovie } from 'react-icons/bi';
import { Context } from '../../context';

const Modal = () => {
	const { setShowMovie, showMovie, genres, setFav, setWatch } = useContext(Context);
	const overlay = useRef(null);
	const { movie } = showMovie;
	const { poster_path, release_date, title, vote_average, genre_ids, overview } = movie;
	const genresNames = genres.filter((g) => genre_ids.includes(g.id));
	const url = poster_path
		? `https://image.tmdb.org/t/p/w500/${poster_path}`
		: 'https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80';

	const [isFavorite, setIsFavorite] = useState(false);
	const [isWatchlist, setIsWatchlist] = useState(false);
	const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));
	const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')));

	useEffect(() => {
		let foundFav = favorites.find((m) => m.id === movie.id);
		let foundWatch = watchlist.find((m) => m.id === movie.id);
		setIsFavorite(!!foundFav);
		setIsWatchlist(!!foundWatch);
	}, []);

	const closeClick = (ev) => {
		if (ev.target === overlay.current) {
			setShowMovie((prev) => ({ ...prev, show: false }));
		}
	};

	const closeEsc = (ev) => {
		if (ev.key === 'Escape') {
			setShowMovie((prev) => ({ ...prev, show: false }));
		}
	};

	useEffect(() => {
		window.addEventListener('click', closeClick);
		window.addEventListener('keydown', closeEsc);

		return () => {
			window.removeEventListener('click', closeClick);
			window.removeEventListener('keydown', closeEsc);
		};
	}, []);

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
			if (isWatchlist) {
				removeFromLocalStorage(key);
				setIsWatchlist(false);
			} else {
				addToLocalStorage(key);
				setIsWatchlist(true);
			}
		}
	};

	return (
		<StyledModal ref={overlay}>
			<div className='modal'>
				<div className='modal__img'>
					<img src={url} alt={`Poster of ${title}`} />
				</div>
				<div className='modal__info'>
					<h1 className='movie__title'>{title}</h1>
					<ul className='movie__data'>
						{release_date && (
							<li>
								<BsCalendar />
								{release_date.slice(0, 4)}
							</li>
						)}
						<li>
							<AiFillStar />
							{vote_average} / 10
						</li>
					</ul>

					<div className='modal__scroll'>
						<p className='movie__desc'>{overview}</p>
						<p>
							Genres:
							{genresNames.map((g) => (
								<Link href='/' key={g.id}>
									<a>{g.name}</a>
								</Link>
							))}
						</p>
					</div>

					<div className='modal__buttons'>
						<button className='btn-fav' onClick={() => handleClick('favorites')}>
							<HiOutlineHeart />
							{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
						</button>
						<button className='btn-watch' onClick={() => handleClick('watchlist')}>
							<BiCameraMovie />
							{isWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
						</button>
					</div>
				</div>
			</div>
		</StyledModal>
	);
};

export default Modal;
