import styled from 'styled-components';
import { showAndMove } from '../../utils/animations';

export const StyledForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* background-color: red; */
margin: 2em 0;
	.btn-container{
		/* background-color: green; */
		min-width: 3em;
		margin-right: 0.5em;
	}
	.btn{
		
		display: flex;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 0.5em;
		border: 0;
		/* border: 2px solid var(--primary); */
		color: var(--white);
		font-size: 1.3em;
		border-radius: 999px;
		cursor: pointer;
		animation: ${showAndMove} 500ms;
	}
	form {
		/* margin: 0 auto; */
		padding: 0 1.2em;
		border-radius: 99em;
		border: 2px solid currentColor;
		display: flex;
		align-items: center;
		max-width: 30em;
		width: 90%;
		color: var(--primary);

		&:focus-within {
			color: var(--primary-light);
		}

		input {
			flex: 1;
			background-color: transparent;
			border: 0;
			color: var(--white);
			padding: 0.75em 1em 0.75em 0;

			&:focus {
				outline: none;
			}
		}

		svg {
			color: currentColor;
		}
	}
`;
