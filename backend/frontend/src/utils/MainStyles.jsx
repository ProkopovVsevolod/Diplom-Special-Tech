import { createGlobalStyle } from 'styled-components';


const ResetStyles = createGlobalStyle`
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Links */

a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	font-weight: inherit;
}

ul, ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

img, svg {
	max-width: 100%;
	height: auto;
}

address {
  font-style: normal;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
	display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}



`;

const Titles = createGlobalStyle`
	h1 {
		font-size: 64px;
		font-weight: 600;

	}

	h2 {
		font-size: 48px;
		font-weight: 600;
		color: #000;
	}

	h3 {
		font-size: 36px;
		font-weight: 600;
		color: #000;
	}
`;

const Base = createGlobalStyle`
	body {
		font-family: 'Montserrat', sans-serif;
		font-size: 24px;
	}

	main {
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`

const Button = createGlobalStyle`
	button {
		border-radius: 12px;
		background: #FFC93E;

		&:hover {
			box-shadow: 0px 0px 15px 0px #FFC93E;
		}

		&:active {
			box-shadow: 0px 0px 30px 0px #FFC93E;
		}
	}
`


const MainStyles = () => {
	return (
		<>
			<ResetStyles />
			<Titles />
			<Base />
			<Button />
		</>
		
	);
}
 
export default MainStyles;
