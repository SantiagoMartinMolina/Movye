import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { StyledModal } from './styles.jsx';

import { HiOutlineHeart } from 'react-icons/hi';
import { MdLocalMovies } from 'react-icons/md';
import { Context } from '../../context';

const Modal = () => {
	const { setShowMovie, showMovie } = useContext(Context);
	const overlay = useRef(null);
	const { movie } = showMovie;
	const { medium_cover_image, rating, title, summary, year, runtime, director, genres } = movie;

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

	return showMovie.show ? (
		<StyledModal ref={overlay}>
			<div className='modal'>
				<div className='modal__img'>
					<img src={medium_cover_image} alt={`Poster of ${title}`} />
				</div>
				<div className='modal__info'>
					<h1 className='movie__title'>{title}</h1>
					<ul className='movie__data'>
						<li>{year}</li>
						<li>{runtime} min.</li>
						{director ? (
							<li>
								Directed by{' '}
								<Link href='/'>
									<a>Pepe</a>
								</Link>
							</li>
						) : (
							<li>No director availabe</li>
						)}
					</ul>

					<div className='modal__scroll'>
						<p className='movie__desc'>{summary}</p>
						<p>Rating: {rating} / 10</p>
						<p>
							Genres:
							{genres.map((g) => (
								<Link href='/' key={g}>
									<a>{g}</a>
								</Link>
							))}
						</p>
					</div>

					<div className='modal__buttons'>
						<button className='btn-fav'>
							<HiOutlineHeart /> Add to favorites
						</button>
						<button className='btn-watch'>
							<MdLocalMovies /> Add to watchlist
						</button>
					</div>
				</div>
			</div>
		</StyledModal>
	) : (
		<></>
	);
};

export default Modal;
