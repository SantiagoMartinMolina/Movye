import { GoSearch } from 'react-icons/go';
import { StyledForm } from './styles';
import { IoIosArrowBack } from 'react-icons/io';

const Form = ({ reset, handleSubmit, input, handleChange, showBtn }) => {
	return (
		<StyledForm>
			<div className='btn-container'>
				{showBtn && (
					<button className='btn' onClick={reset}>
						<IoIosArrowBack />
					</button>
				)}
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search for a movie...'
					value={input}
					onChange={handleChange}
				/>
				<button type='submit' className='submit'>
					<GoSearch />
				</button>
			</form>
		</StyledForm>
	);
};

export default Form;
