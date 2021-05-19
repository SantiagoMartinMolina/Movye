import styled, { css } from 'styled-components';

let h = Math.floor(Math.random() * 360);

const randomColor = () => {
	return `hsl(${h}, 80%, 80%)`;
};

const createButtons = () => {
	let styles = '';
	for (let i = 0; i <= 19; i++) {
		const color = randomColor();
		styles += `
			&.btn-${i} {
				background-color: ${color};
				
				&:hover { filter: brightness(1.15) }

				&:focus {
					outline: 2px solid ${color};
					outline-offset: 5px;
				}
			
				&:active { filter: brightness(0.95) }
			}
		`;

		h += 20;
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
	transition: filter 300ms ease;

	span {
		font-family: var(--ff-title);
		font-size: 1.5em;
		font-style: italic;
	}

	${createButtons()}
`;
