import { StyledTopbar } from './styles';
import Logo from '../Logo';

const Topbar = () => {
	return (
		<StyledTopbar>
			<div className='logo-container'>
				<Logo />
			</div>
			<div className='user'>
				<div>
					<img
						src='https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
						alt=''
					/>
				</div>
				<p>Santiago</p>
			</div>
		</StyledTopbar>
	);
};
export default Topbar;
