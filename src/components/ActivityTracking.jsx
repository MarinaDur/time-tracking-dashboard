import styled, { css } from "styled-components";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Dots from "../ui/Dots";
import ColoredContainer from "../ui/ColoredContainer";

const StyledActivityMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-dark-blue);
  padding: 3rem 3rem 1rem;
  height: auto;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  transform: translateY(-1rem);

  &:hover {
    background: var(--color-desaturated-blue-hover);
  }

  @media (min-width: 900px) {
    height: 100%;
    padding: 2rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 900px) {
    ${(props) =>
      props.hours &&
      css`
        flex-direction: column;
        align-items: flex-start;
      `}
  }
`;

function ActivityTracking({ value, view }) {
  const { title, timeframes } = value;
  const { daily, weekly, monthly } = timeframes;

  function formatTime(value) {
    const plural = value === 1 ? "hr" : "hrs";
    return `${value}${plural}`;
  }

  function formatText(value) {
    const when =
      value === "Daily"
        ? "Yesterday"
        : value === "Weekly"
        ? "Last week"
        : "Last month";
    return `${when}`;
  }

  return (
    <Container className={title}>
      <ColoredContainer activity={title} />
      <StyledActivityMain>
        <StyledDiv>
          <Heading as="h2" activity="activity">
            {title.slice(0, 1).toUpperCase() + title.slice(1)}
          </Heading>
          <Dots />
        </StyledDiv>
        <StyledDiv hours="hours">
          <Paragraph hours="hours">
            {view === "Daily" && formatTime(daily.current)}
            {view === "Weekly" && formatTime(weekly.current)}
            {view === "Monthly" && formatTime(monthly.current)}
          </Paragraph>
          <Paragraph text="text">
            {formatText(view)} -{" "}
            {view === "Daily" && formatTime(daily.previous)}
            {view === "Weekly" && formatTime(weekly.previous)}
            {view === "Monthly" && formatTime(monthly.previous)}
          </Paragraph>
        </StyledDiv>
      </StyledActivityMain>
    </Container>
  );
}

export default ActivityTracking;
