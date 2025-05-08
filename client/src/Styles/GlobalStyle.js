import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
/* fonts */
--font-roboto: Roboto;
--text-lg-medium: Poppins;
/* font sizes */
--fontsize-xs: 1rem;
--fontsize-s: 2rem;
--fontsize-n: 4rem;
--fontsize-l: 8rem;
--fontsize-xl: 10rem;
/* Colors */

//backgrounds
--color-background-100:#5B5B5B;
--color-background-200:#4B4F52;
--color-background-400:rgb(66, 66, 66);
--color-background-500:#464646;
--color-background-700:#3E3F3C;
--color-background-800:#363732;

//text
--color-white-50:rgb(238, 238, 238);
--color-white-500: #fff;

--color-black-500: #000;

--color-primary: #6c9eca;
--color-primary-500: #6c9eca;
--color-primary-600: #558fc2;
--color-primary-700: #4888bf;

--color-secondary:#E7C067;

--color-succes:#2BDD66;

--color-input:#A0864B;

--backdrop-color: rgba(0, 0, 0, 0.3);



/* 
--color-secondary:#464646 ;
--color-secondary:#969696 ;
--color-secondary:#FF9900 ;
--color-secondary:#FFD700 ;
--color-secondary:#2E2E2E ;
--color-secondary:#5E5E5E ;
--color-secondary:#464646  ;
--color-secondary:#4682B4  ;
--color-secondary:#B44682  ;
--color-secondary:#363636  ;
--color-secondary:#666666  ;
--color-secondary:#A64646  ;
--color-secondary:#468C96 ;
--color-secondary:#5AB4BF ;
--color-secondary:#A4E4E0 ;
--color-secondary:#E6A4C4 ;
--color-secondary:#A4D8E6 ;
--color-secondary:#E6BCA4 ;
--color-secondary:#A4E6C0 ;
--color-secondary:#C1A267 ; */

/* Gaps */

/* Paddings */
--padding-xs-1: 0.5rem;
--padding-xs-0: 1rem;
--padding-s: 2rem;
--padding-ls: 3rem;
--padding-m: 4rem;
--padding-l: 8rem;
--padding-xl: 10rem;

/* Border radiuses */
--br-s: 2.5px;
--br-m: 5px;
--br-l: 10px;
--br-xl: 15px;


--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);



}
body{
    padding: 0;
    margin:0%;
    background-color: #464646;
    font-family: var(--font-roboto);
    color: var(--color-white-500);
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-background-200);
  color: var(--color-background-500);
}
    
    input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-background-800);
  outline-offset: -1px;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 1;
    border: 2px solid var(--color-background-800);
  }
  thead tr {
    text-align: center;
    padding: 0.3rem;
    background-color: var(--color-background-800);
    border: 1px solid var(--color-background-800);
  }
  thead th {
    text-align: center;
    padding: 0.3rem;

    background-color: var(--color-background-300);
    border: 1px solid var(--color-background-800);
  }
  tr:nth-child(even) {
    background-color: var(--color-background-800);
  }
  tr:nth-child(even) {
    background-color: var(--color-background-800);
  }
  td {
    text-align: center;
    padding: 0.3rem;
    border: 1px solid var(--color-background-500);
    font-size: 0.8rem;
  }


`;

export default GlobalStyle;
