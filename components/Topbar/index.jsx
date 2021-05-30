import { StyledTopbar } from './styles';
import Logo from '../Logo';
import { AiFillGithub } from 'react-icons/ai';

const Topbar = () => {
	return (
		<StyledTopbar>
			<div className='logo-container'>
				<Logo />
			</div>
			<a
				className='github'
				href='https://github.com/SantiagoMartinMolina/Movye'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillGithub />
			</a>
		</StyledTopbar>
	);
};
export default Topbar;
