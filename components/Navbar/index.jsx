import Link from 'next/link';
import { StyledNavbar } from './styles';
import { AiOutlineHome } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { HiOutlineHeart } from 'react-icons/hi';
import { MdLocalMovies } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
	return (
		<StyledNavbar className='scroll'>
			<ul>
				<li>
					<Link href='/'>
						<a>
							<AiOutlineHome /> <span>Home</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>
							<GoSearch /> <span>Search</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>
							<HiOutlineHeart /> <span>Favorites</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>
							<MdLocalMovies /> <span>Watchlist</span>
						</a>
					</Link>
				</li>
			</ul>

			<div className='credits'>
				<FaReact />
				<p>
					Hecho por <a href='https://www.linkedin.com/in/santiago-molina-dev/'>Santi</a> y{' '}
					<a href='https://www.linkedin.com/in/emiliano-alfonso/'>Emi</a>
				</p>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
