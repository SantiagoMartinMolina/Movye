import styled, { css } from 'styled-components';

let h = Math.floor(Math.random() * 360);

const randomColor = () => {
	return `hsl(${h}, 80%, 80%)`;
};

const createButtons = () => {
	let styles = '';
	for (let i = 0; i <= 19; i++) {
		styles += `
			&.btn-${i} {
				background-color: ${randomColor()};
				
				&:hover { filter: brightness(1.1) }
				&:active { filter: brightness(0.95) }
			}
		`;

		h += Math.floor(Math.random() * 150 + 50);
	}

	return css`
		${styles}
	`;
};

export const StyledFilterButton = styled.button`
	background-color: var(--primary);
	color: black;
	flex: 1;
	margin: 0.5em;
	min-width: 15em;
	max-width: 40em;
	min-height: 15em;
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

	${createButtons()}
`;
