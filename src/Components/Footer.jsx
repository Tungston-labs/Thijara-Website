import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  LeftSection,
  Logo,
  ContactInfo,
  ContactItem,
  NavLinks,
  NavLink,
  RightSection,
  SocialIcons,
  StoreButtons,
  StoreButton,
  GetInTouchTitle,
  GetInTouchText,
  Copyright
} from './Footer.styles';

import { TbMailFilled } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaFlickr } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LeftSection>
          <Logo />
          <ContactInfo>
            <ContactItem><TbMailFilled /> support@ARM-.com</ContactItem>
            <ContactItem><FaPhone /> +91 7655736021</ContactItem>
          </ContactInfo>
          <div>
            <GetInTouchTitle>Download the app now!</GetInTouchTitle>
            <StoreButtons>
              <StoreButton className="google" />
              <StoreButton className="apple" />
            </StoreButtons>
          </div>
        </LeftSection>
      
        <NavLinks>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#how-it-works">How it works</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </NavLinks>

        <RightSection>
          <GetInTouchTitle>Get in Touch</GetInTouchTitle>
          <GetInTouchText>
            Questions or Feedback?<br />
            We’d love to hear from you
          </GetInTouchText>
          <SocialIcons>
            <FaFacebook />
            <FaInstagram />
            <FaFlickr />
          </SocialIcons>
        </RightSection>
      </FooterWrapper>
      <Copyright>
        © Copyright 2024, Thijara. Designed by <span>Tungston Labs.</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
