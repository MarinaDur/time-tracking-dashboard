import styled, { css } from "styled-components";

const Paragraph = styled.p`
  ${(props) =>
    props.hours === "hours" &&
    css`
      font-size: clamp(3rem, 2.5vw, 3.5rem);
      font-weight: 300;
      color: var(--color-white);
    `}

  ${(props) =>
    props.text === "text" &&
    css`
      font-size: 1.3rem;
      color: var(--color-pale-Blue);
      letter-spacing: 0.2px;
    `}
`;

export default Paragraph;
