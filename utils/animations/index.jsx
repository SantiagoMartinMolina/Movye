import { keyframes } from 'styled-components';

export const show = keyframes`
	0% { opacity: 0 }
	100% { opacity: 1 }
`;

export const showAndMove = keyframes`
	0% { opacity: 0; transform: translateY(-1em) }
	100% { opacity: 1; transform: translateY(0) }
`;

export const showAndGrow = keyframes`
	0% { opacity: 0; transform: scaleY(0); }
	100% { opacity: 1; transform: scaleY(1) }
`;

export const hide = keyframes`
	0% { opacity: 1 }
	100% { opacity: 0 }
`;

export const rotate = keyframes`
	0% { transform: rotateZ(0) }
	100% { transform: rotateZ(360deg) }
`;
