import styled from "styled-components";

const StyledImageDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid var(--color-white);
`;
const StyedImage = styled.img`
  width: 100%;
`;

function Image({ src, alt }) {
  return (
    <StyledImageDiv>
      <StyedImage src={src} alt={alt} />;
    </StyledImageDiv>
  );
}

export default Image;
