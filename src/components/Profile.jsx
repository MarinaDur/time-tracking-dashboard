import styled, { css } from "styled-components";
import Image from "../ui/Image";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";
import Container from "../ui/Container";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.view ? "space-around" : "center")};
  gap: ${(props) => (props.view ? "0rem" : "1rem")};
  background: ${(props) =>
    props.view ? "var(--color-dark-blue)" : "var(--color-blue)"};
  padding: ${(props) => (props.view ? "2rem 3rem" : "3rem")};
  border-radius: 10px;

  @media (min-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    ${(props) =>
      props.self &&
      css`
        height: 300px;
        line-height: 1.3;
        justify-content: flex-start;
        gap: 4rem;
      `}

    ${(props) => props.view && css``}
  }
`;

function Profile({ onClick, view }) {
  return (
    <Container self="profile" className="profile">
      <StyledContainer self="profile">
        <Image src="image-jeremy.png" alt="profile picture" />
        <div>
          <Paragraph text="text">Report for</Paragraph>
          <Heading as="h1">Jeremy Robson</Heading>
        </div>
      </StyledContainer>
      <StyledContainer view="view">
        <Heading as="h2" view="view" value={view === "Daily"} onClick={onClick}>
          Daily
        </Heading>
        <Heading
          as="h2"
          view="view"
          value={view === "Weekly"}
          onClick={onClick}
        >
          Weekly
        </Heading>
        <Heading
          as="h2"
          view="view"
          value={view === "Monthly"}
          onClick={onClick}
        >
          Monthly
        </Heading>
      </StyledContainer>
    </Container>
  );
}

export default Profile;
