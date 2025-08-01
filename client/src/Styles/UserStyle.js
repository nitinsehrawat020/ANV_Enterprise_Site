import { createGlobalStyle } from "styled-components";

const UserStyle = createGlobalStyle`
body {
margin: 0; line-height: normal;
color: #000;
font-family: var(--font-poppins);

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
}
`;

export default UserStyle;
