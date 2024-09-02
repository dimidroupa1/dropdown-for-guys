import { css } from "styled-components";

export const paddingStyle = css`
  padding: 60px;

  @media (max-width: 800px) {
    padding: 60px 20px;
  }

  @media (min-width: 2200px) {
    padding: 100px;
  }
`;

export const bigTextStyle = css`
    font-size: 8vw;
    text-transform: uppercase;
    font-size: 600;
    font-family: "TT Hoves Pro", sans-serif;
`