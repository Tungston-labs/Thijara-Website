// Navbar.jsx
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLinkStyled,
  HighlightBar,
  Hamburger,
  MobileMenu
} from './Navbar.styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getActivePath = () => {
    if (location.pathname === '/' || location.pathname === '/home') return 'home';
    if (location.pathname.includes('privacy')) return 'privacy';
    if (location.pathname.includes('terms')) return 'terms';
    return '';
  };

  const activePath = getActivePath();

  return (
    <NavbarContainer variant={activePath}>
      <Logo />
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>

      <NavLinks>
        <NavLinkItem>
          <NavLinkStyled as={Link} to="/" active={activePath === 'home'}>
            Home
          </NavLinkStyled>
          {activePath === 'home' && <HighlightBar />}
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkStyled as={Link} to="/privacy-policy" active={activePath === 'privacy'}>
            Privacy Policy
          </NavLinkStyled>
          {activePath === 'privacy' && <HighlightBar />}
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkStyled as={Link} to="/terms" active={activePath === 'terms'}>
            Terms & Conditions
          </NavLinkStyled>
          {activePath === 'terms' && <HighlightBar />}
        </NavLinkItem>
      </NavLinks>
                                                                   
      {isOpen && (
        <MobileMenu>
          <NavLinkStyled as={Link} to="/" onClick={toggleMenu}>
            Home
          </NavLinkStyled>
          <NavLinkStyled as={Link} to="/privacy-policy" onClick={toggleMenu}>
            Privacy Policy
          </NavLinkStyled>
          <NavLinkStyled as={Link} to="/terms" onClick={toggleMenu}>
            Terms & Condition
          </NavLinkStyled>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
