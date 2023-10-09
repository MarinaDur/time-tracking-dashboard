import styled, { css } from "styled-components";

const ColoredContainer = styled.div`
  height: 45px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  padding: 0;
  margin: 0;
  /* transform: translateY(1rem); */

  ${(props) =>
    props.activity === "work" &&
    css`
      background: var(--color-light-red-work) url("icon-work.svg") no-repeat
        center right;
      background-size: 70px;
      background-position: calc(100% - 20px) 30%;
    `}

  ${(props) =>
    props.activity === "play" &&
    css`
      background: var(--color-soft-blue-play) url("icon-play.svg") no-repeat
        center right;
      background-size: 70px;
      background-position: calc(100% - 20px) 30%;
    `}

    ${(props) =>
    props.activity === "study" &&
    css`
      background: var(--color-light-red-study) url("icon-study.svg") no-repeat
        center right;
      background-size: 70px;
      background-position: calc(100% - 20px) 30%;
    `}

     ${(props) =>
    props.activity === "exercise" &&
    css`
      background: var(--color-lime-green-exercise) url("icon-exercise.svg")
        no-repeat center right;
      background-size: 70px;
      background-position: calc(100% - 20px) 30%;
    `}

      ${(props) =>
    props.activity === "social" &&
    css`
      background: var(--color-violet-social) url("icon-social.svg") no-repeat
        center right;
      background-size: 70px;
      background-position: calc(100% - 20px) 30%;
    `}

          ${(props) =>
    props.activity === "self-care" &&
    css`
      background: var(--color-soft-orange-self-care) url("icon-self-care.svg")
        no-repeat center right;
      background-size: 70px;
      background-position: calc(100% - 20px) 30%;
    `}

     @media (min-width: 900px) {
    height: 65px;
  }
`;

export default ColoredContainer;
