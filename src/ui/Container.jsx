import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  background: var(--color-dark-blue);

  padding: 0;
  cursor: pointer;

  &:hover {
    background: var(--color-desaturated-blue-hover);
  }
  ${(props) =>
    props.self &&
    css`
      background: var(--color-dark-blue);
      &:hover {
        background: var(--color-dark-blue);
      }
    `}

  @media (min-width: 900px) {
    height: 100%;
    ${(props) =>
      props.className === "profile" &&
      css`
        grid-area: self;
      `}

    ${(props) =>
      props.className === "work" &&
      css`
        grid-area: work;
      `}

     ${(props) =>
      props.className === "play" &&
      css`
        grid-area: play;
      `}

     ${(props) =>
      props.className === "study" &&
      css`
        grid-area: study;
      `}

     ${(props) =>
      props.className === "exercise" &&
      css`
        grid-area: exercise;
      `}

     ${(props) =>
      props.className === "social" &&
      css`
        grid-area: social;
      `}

     ${(props) =>
      props.className === "self-care" &&
      css`
        grid-area: self-care;
      `}
  }
`;

export default Container;
