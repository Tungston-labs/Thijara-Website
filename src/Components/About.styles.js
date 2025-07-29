import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  background-image: url('images/about.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8rem 1rem;
  position: relative;

  @media (max-width: 768px) {
    background-image: url('images/about-mobile.png');
    padding: 4rem 1rem;
  }
`;

export const TitleRow = styled.div`
  position: absolute;
  top: 20px;
  left: 250px;

  @media (max-width: 768px) {
    position: static;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 2px solid #000;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 2rem;
  }
`;

export const Intro = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #000;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: justify;
  }
`;

export const BulletList = styled.ul`
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.2rem;
  line-height: 2;
  color: #000;
  padding-left: 1.2rem;
  list-style: none;
  margin: 0;

  li::before {
    content: '▸';
    margin-right: 0.5rem;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

export const ImageWrapper = styled.div`
  float: left;
  width: 40%;
  padding-right: 2rem;

  @media (max-width: 768px) {
    float: none;
    width: 100%;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

export const PhoneImage = styled.img`
  width: 100%;
  max-width: 250px;
  display: block;
  margin: auto;
`;
