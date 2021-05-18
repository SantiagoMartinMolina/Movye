import { GoSearch } from 'react-icons/go';
import { StyledForm } from './styles';

const Form = ({ reset, handleSubmit, input, handleChange }) => {
	return (
		<StyledForm>
			<button onClick={reset}>volver</button>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search for a movie...'
					value={input}
					onChange={handleChange}
				/>
				<GoSearch />
			</form>
		</StyledForm>
	);
};

export default Form;
