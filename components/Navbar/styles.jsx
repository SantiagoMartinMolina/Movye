import styled from 'styled-components';
import { show, hide } from '../../utils/animations';

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
	transition: width 200ms ease;

	ul {
		list-style: none;

		a {
			display: flex;
			align-items: center;
			padding: 1em 0 1em 1em;
			text-decoration: none;
			color: inherit;
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
			min-width: 1em;
		}

		span {
			font-size: 0.9em;
			margin-left: 1.5em;
			display: none;
		}
	}

	.credits {
		margin-top: auto;

		p {
			display: flex;
			align-items: flex-end;
			padding: 0 1.25em 1em;
		}

		span {
			font-size: 0.75em;
			color: #eee;
			margin-left: 1.5em;
			display: none;
		}

		svg {
			font-size: 1.4em;
			min-width: 1em;
		}

		a {
			text-decoration: none;
			color: var(--primary);
		}

		a:hover {
			color: var(--secondary);
		}
	}

	&:hover {
		width: 15em;

		span {
			display: inline;
			animation: ${show} 1s;
		}

		.credits svg {
			/* animation: ${hide} 1s;
			animation-fill-mode: forwards; */
		}
	}
`;
