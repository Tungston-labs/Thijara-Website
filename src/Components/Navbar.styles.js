import styled, { css } from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;

  ${({ variant }) => {
    switch (variant) {
      case 'home':
        return css`
          background-color: rgba(0, 0, 0, 0.6);
        `;
      case 'privacy':
        return css`
          background-color: #4c4c4c;
        `;
      case 'terms':
        return css`
          background-color: #4c4c4c;
        `;
      default:
        return css`
          background-color: #333;
        `;
    }
  }}

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  width: 250px;
  height: 60px;
  background-image: url('/images/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 35px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkItem = styled.li`
  position: relative;
  list-style: none;
`;

export const NavLinkStyled = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: color 0.3s ease;

  ${({ active }) =>
    active &&
    css`
      color: #a4cb3f;
    `}

  &:hover {
    color: #a4cb3f;
  }
`;

export const HighlightBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #a4cb3f;
  position: absolute;
  bottom: -10px;
  left: 0;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    width: 24px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #3a3a3a;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  z-index: 999;

  a {
    color: white;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: #a4cb3f;
    }
  }
`;
