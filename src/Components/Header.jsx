import React from 'react';
import {
  HeroContainer,
  ContentWrapper,
  TextLogo,
  Tagline,
  Description,
  ButtonGroup,
  GooglePlay,
  // AppStore,
  PhoneImageWrapper,
  PhoneImage
} from './Header.styles';

const Header = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <div>
          <TextLogo>Thijara</TextLogo>
          <Tagline>
            The First Digital Marketplace for Fruits & Vegetables in the Middle East
          </Tagline>
          <Description>Download the app now!</Description>
          <ButtonGroup>
            <a
              href="https://play.google.com/store/apps/details?id=com.thijara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlay />
            </a>

            {/* <AppStore /> */}
          </ButtonGroup>
        </div>
        <PhoneImageWrapper>
          <PhoneImage />
        </PhoneImageWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Header;
