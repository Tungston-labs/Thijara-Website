import React, { useState } from 'react';
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLink,
  HighlightBar,
  Hamburger,
  MobileMenu,
} from './Navbar.styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Logo />
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>

      <NavLinks>
        <NavLinkItem>
          <NavLink active href="/">Home</NavLink>
          <HighlightBar />
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="/privacy-policy">Privacy Policy</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="/terms">Terms & condition</NavLink>
        </NavLinkItem>
      </NavLinks>

      {isOpen && (
        <MobileMenu>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/privacy-policy">Privacy Policy</NavLink>
          <NavLink href="/terms">Terms & condition</NavLink>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
