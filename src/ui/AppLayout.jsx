import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled, { css } from "styled-components"; 
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;

  ${(props) =>
    props.toggled === true
      ? css`
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
        `
      : css`
          grid-template-columns: 26rem 1fr;
          grid-template-rows: auto 1fr;
        `}
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 2.8rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [toggleState, setToggleState] = useState(true);

  function toggle() {
    setToggleState(!toggleState);
  }

  return (
    <StyledAppLayout toggled={toggleState}>
      <Header toggle={toggle} />
      {!toggleState && <Sidebar />}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
