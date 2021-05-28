import Link from 'next/link';
import { StyledNavbar } from './styles';
import { AiOutlineHome } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { HiOutlineHeart } from 'react-icons/hi';
import { BiCameraMovie } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [top, setTop] = useState(0);

	const handleScroll = () => {
		setTop(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<StyledNavbar top={top}>
			<ul>
				<li>
					<Link href='/'>
						<a>
							<AiOutlineHome /> <span>Home</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/search'>
						<a>
							<GoSearch /> <span>Search</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/favorites'>
						<a>
							<HiOutlineHeart /> <span>Favorites</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/watchlist'>
						<a>
							<BiCameraMovie /> <span>Watchlist</span>
						</a>
					</Link>
				</li>
			</ul>

			<div className='credits'>
				<p>
					<FaReact />
					<span>
						Made by <a href='https://www.linkedin.com/in/santiago-molina-dev/'>Santi</a>{' '}
						& <a href='https://www.linkedin.com/in/emiliano-alfonso/'>Emi</a>
					</span>
				</p>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
