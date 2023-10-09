import styled from "styled-components";
import Profile from "./Profile";
import ActivityTracking from "./ActivityTracking";
import { data } from "../data/data";
import { useState } from "react";

const StyledMain = styled.main`
  //margin: 3rem auto 3rem;
  max-width: 900px;
  margin: 4rem 2rem;
  display: grid;
  place-items: center;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  width: 80vw;

  gap: 2rem;
`;
const StyledDiv = styled.div`
  display: grid;
  place-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

function Main() {
  const [view, setView] = useState("Daily");

  function handleSetView(e) {
    setView(e.target.innerHTML);
  }
  console.log(view);

  return (
    <StyledDiv>
      <StyledMain className="main">
        <Profile onClick={handleSetView} view={view} />
        {data.map((cur) => (
          <ActivityTracking
            activity="work"
            value={cur}
            view={view}
            key={cur.title}
          />
        ))}
      </StyledMain>
    </StyledDiv>
  );
}

export default Main;
