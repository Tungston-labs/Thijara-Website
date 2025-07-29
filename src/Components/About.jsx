import React from "react";
import {
  AboutContainer,
  TitleRow,
  Title,
  ContentWrapper,
  Heading,
  ImageWrapper,
  PhoneImage,
  Intro,
  BulletList
} from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <TitleRow>
        <Title>About Thijara</Title>
      </TitleRow>

      <ContentWrapper>
        <ImageWrapper>
          <PhoneImage src="images/phone.png" alt="Phone" />
        </ImageWrapper>

        <div>
          <Heading>Thijara – Smarter Trade for Fresh Produce</Heading>

          <Intro>
            Thijara – Smarter Trade for Fresh Produce <br />
            The Middle East’s first B2B platform for fruits and vegetables
          </Intro>

          <BulletList>
            <li>Connects wholesalers directly with verified buyers</li>
            <li>Enables fast, secure, and transparent transactions</li>
            <li>Simplifies and digitizes the produce supply chain</li>
            <li>Built to empower and grow the regional agri-trade network</li>
          </BulletList>
        </div>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
