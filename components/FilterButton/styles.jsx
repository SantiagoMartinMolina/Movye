import styled from 'styled-components';

export const StyledFilterButton = styled.button`
	background-color: ${(props) => props.bg};
	color: black;
	flex: 1;
	min-width: 20%;
	border: 0;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 300ms ease;

	&:hover {
		filter: brightness(1.1);
	}

	&:active {
		filter: brightness(0.95);
	}

	span {
		font-family: var(--ff-title);
		font-size: 1.5em;
		font-style: italic;
	}
`;
