import styled from "styled-components";

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-pale-Blue);
`;

const StyledDotsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  width: 30px;
`;
function Dots() {
  return (
    <StyledDotsDiv>
      <Dot />
      <Dot />
      <Dot />
    </StyledDotsDiv>
  );
}

export default Dots;
