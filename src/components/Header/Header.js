import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side />

        <MobileNavButtons>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileNavButtons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  --padding: 16px 32px;

  display: flex;
  align-items: baseline;
  overflow-x: auto;
  padding: var(--padding);
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${(props) => props.theme.queries.phoneAndDown} {
    align-items: center;
    --padding: 20px 16px;
  }
`;

const MobileNavButtons = styled.div`
  display: none;

  @media ${(props) => props.theme.queries.phoneAndDown} {
    display: flex;
    gap: 17px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(12px, 4vw - 1rem, 48px);
  margin: 0px 48px;

  @media ${(props) => props.theme.queries.phoneAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
