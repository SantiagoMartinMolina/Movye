import Navbar from '../Navbar/index';
import Topbar from '../Topbar/index';
import Modal from '../Modal';
import { Context } from '../../context/index';
import { useContext } from 'react';

const Layout = ({ children }) => {

	const { showMovie } = useContext(Context);
	return (
		<>
			{showMovie.show && <Modal />}
			<Navbar />
			<Topbar />

			<div style={{ marginLeft: '4em' }}>
				{children}
			</div>
		</>
	);
};

export default Layout;
