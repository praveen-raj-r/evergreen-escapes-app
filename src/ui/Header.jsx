import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

import ButtonIcon from "./ButtonIcon";
import { BsCaretLeftSquare } from "react-icons/bs";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 1.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <ButtonIcon>
        <BsCaretLeftSquare />
      </ButtonIcon>
      <StyledFlexContainer>
        <UserAvatar />
        <HeaderMenu />
      </StyledFlexContainer>
    </StyledHeader>
  );
}

export default Header;
