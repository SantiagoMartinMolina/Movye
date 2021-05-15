import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	background-color: var(--dark-200);
	padding: 1em 0;
	position: fixed;
	top: 4em;
	left: 0;
	bottom: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	width: 4em;

	ul {
		list-style: none;

		a {
			text-decoration: none;
			color: inherit;
			display: flex;
			align-items: center;
			padding: 1em 0 1em 1em;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			transition: border-left-color 200ms ease, color 200ms ease, background-color 200ms ease;
		}

		a:hover {
			border-left-color: var(--primary);
			color: var(--primary);
			background-color: var(--dark-100);
		}

		svg {
			font-size: 1.4em;
		}

		span {
			margin-left: 1em;
			display: none;
		}
	}

	.credits {
		width: 100%;
		padding: 0 1em 1em;
		margin: auto auto 0;
		text-align: center;
		display: none;

		p {
			font-size: 0.85em;
			opacity: 0;
			width: 0;
			height: 0;
			overflow: hidden;
			transition: opacity 600ms ease;
		}

		svg {
			font-size: 1.3em;
		}

		a {
			text-decoration: none;
			color: var(--primary);
		}

		a:hover {
			color: var(--secondary);
		}
	}
`;
