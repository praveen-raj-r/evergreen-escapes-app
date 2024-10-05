import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  width: 100%;
  min-height: 100%;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem 2.8rem;
`;

function AppLayout() {
  const [toggleState, setToggleState] = useState(true);

  function toggle() {
    setToggleState(!toggleState);
  }

  return (
    <StyledAppLayout toggled={toggleState}>
      {!toggleState && <Sidebar />}
      <Main>
        <Header toggle={toggle} />
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
