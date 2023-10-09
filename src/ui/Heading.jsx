import styled, { css } from "styled-components";

const Heading = styled.h1`
  color: var(--color-white);

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: clamp(2rem, 2.5vw, 3rem);
      font-weight: 300;
    `}

  ${(props) =>
    props.as === "h2" &&
    props.activity === "activity" &&
    css`
      font-size: 1.7rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h2" &&
    props.view === "view" &&
    css`
      font-size: 1.7rem;
      color: var(--color-desaturated-blue);
      font-weight: 300;
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }
    `}

       ${(props) =>
    props.value &&
    css`
      color: var(--color-white);
    `}
`;
export default Heading;
