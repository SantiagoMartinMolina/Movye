import Navbar from '../Navbar/index';
import Topbar from '../Topbar/index';
import { MovieContext } from '../../context';

const Layout = ({ children }) => {
	return (
		<MovieContext>
			<Navbar />
			<Topbar />
			{children}
		</MovieContext>
	);
};

export default Layout;
