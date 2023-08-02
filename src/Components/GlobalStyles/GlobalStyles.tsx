import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const GlobalStyles = createGlobalStyle`

:root {
    --headerBg: #FBF8F3;
    --black: #111;
    --white: #fff;
    --btnColor: #1DA1F2;
    --btnHoverColor: #8BDAE3;
    --textColor: #78797a;
    --sectionBg: #181F2A;
    --footerBg: #0C1524;
    --box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    --font-poppins: 'Poppins', sans-serif;
    --transition: all .3s ease;
}

*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

body {
    background: var(--bodyBg);
    font-family: var(--font-poppins);
	overflow-x: hidden;
}

a {
    text-decoration: none;
    cursor: pointer;
}

h1, h2, h3, h4, h5{
    color: var(--black);
    font-weight: 700;
}

ul,
ol,
li {
    list-style: none;
}

p {
    color: var(--textColor);
}

img {
    width: 100%;
    height: auto;
}

section {
    margin: 4rem 0;
}

.container {
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
}

@media only screen and (max-width:1280px) {
container {
    width: 95%;
}
}
`
export default GlobalStyles;