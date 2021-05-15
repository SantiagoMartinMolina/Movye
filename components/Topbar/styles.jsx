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
		}
	}

	.user {
		display: flex;
		align-items: center;

		div {
			margin-right: 0.5em;
			width: 2em;
			height: 2em;
			overflow: hidden;
			border-radius: 50%;
			border: 2px solid var(--primary);

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
`;
