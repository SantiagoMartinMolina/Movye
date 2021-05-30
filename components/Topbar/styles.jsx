import styled from 'styled-components';

export const StyledTopbar = styled.div`
	padding: 0 4em;
	height: 4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid var(--primary);
	background-color: var(--dark-100);

	.logo-container {
		height: 2em;
		width: 7em;
		display: flex;

		svg {
			height: 100%;
			width: 100%;
			min-width: 5em;
		}
	}

	.github {
		color: currentColor;
		font-size: 2em;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 200ms ease;

		&:hover {
			color: var(--primary);
		}
	}

	@media (max-width: 400px) {
		padding: 0 2em;
	}
`;
