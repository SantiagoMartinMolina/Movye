import styled from 'styled-components';

export const StyledForm = styled.div`
	form {
		margin: 0 auto 2em;
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
