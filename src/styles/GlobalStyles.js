import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

/// Primary

--color-blue: hsl(246, 80%, 60%);

--color-light-red-work: hsl(15, 100%, 70%);
--color-soft-blue-play: hsl(195, 74%, 62%);
--color-light-red-study: hsl(348, 100%, 68%);
--color-lime-green-exercise: hsl(145, 58%, 55%);
--color-violet-social: hsl(264, 64%, 52%);
--color-soft-orange-self-care: hsl(43, 84%, 65%);

/// Neutral

--color-very-dark-blue: hsl(226, 43%, 10%);
--color-dark-blue: hsl(235, 46%, 20%);
--color-desaturated-blue: hsl(235, 45%, 61%);
--color-desaturated-blue-hover: hsl(235, 50%, 59%);

--color-pale-Blue: hsl(236, 100%, 87%);


--color-white: hsl(0, 0%, 100%);


 
}
/* 
#root{
  width: 100vw;
  height: 100vh;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
   height: 100vh;
}

body {
  font-family: 'Rubik', sans-serif;
  //color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
   line-height: 1.5;
  font-size: 16px;
  background: var(--color-very-dark-blue);
  /* min-height: 100vh;
  min-width: 100vw; */
  /* display  :flex ;
justify-items: center; */
/* 
 display: grid;
  place-content: center;
  
  min-height: 100vh; */

  
}

input{
    font-size: 3.2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}




p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  //filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}


 @media (min-width: 900px) {
  .main{

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
    "self work play study"
    "self exercise social self-care"
    
    ;
  }

/* .profile{
  grid-area: self;
}

.work{
  grid-area: work;
  background: red;
}

.play{
  grid-area: play;
}

.exercise{
  grid-area: exercise;
}

.social{
  grid-area: social;
}

.self-care{
  grid-area: self-care;
} */


  } 




  /* @media (min-width: 900px) {
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: repeat(2, min-content);
    grid-template-areas: "
    profile work plat study
    profile exercise social-self
    
    
    ";
  } */

/* .work{
  background: black;
} */

/*
FOR DARK MODE



*/
`;
export default GlobalStyles;
