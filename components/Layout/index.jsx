import Footer from '../Footer';
import Navbar from '../Navbar/index';
import Topbar from '../Topbar/index';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Topbar />
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
