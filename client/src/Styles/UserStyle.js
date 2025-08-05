import { createGlobalStyle } from "styled-components";

const UserStyle = createGlobalStyle`
body {
margin: 0; line-height: normal;
color: #000;
font-family: var(--font-poppins);
padding: 0;
    margin:0%;
    
    margin: 0; 
    line-height: normal;
    overflow-x: hidden;


}

html {
    overflow-x: hidden;
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

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
:root {
/* Color */
--color-gray-200: rgba(255, 255, 255, 0.75);
--color-gray-100: #2c2c2c;
--color-black: #000;
--color-orange: #ffaf0f;
--color-whitesmoke: #f5f3ef;
--color-floralwhite: #fffbf4;
--color-dimgray: #5c5c5c;
--color-white: #fff;
/* Gap */
--gap-8: 0.5rem;
--gap-16:1rem;
--gap-24: 1.5rem;
--gap-64: 4rem;
/* Padding */
--padding-4: 0.25rem;
--padding-16: 1rem;
--padding-24: 1.5rem;
/* BorderRadius */
--br-8: 8px;
--br-16:16px;
--br-20: 20px;
--br-24: 24px;
/* Font */
--font-poppins: Poppins;
--font-roboto: Roboto;
/* FontSize */
--font-size-16: 1rem;
--font-size-20: 1.25rem;
--font-size-24: 1.5rem;
--font-size-48: 3rem;
--font-size-64: 4rem;

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
`;

export default UserStyle;
