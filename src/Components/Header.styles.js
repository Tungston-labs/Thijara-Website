import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("/images/background1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 6rem 1rem 1rem;
    flex-direction: column;
    justify-content: flex-start;
    background-position: top;
    text-align: center;
    background-image: url("/images/phones-mockup.svg");
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const TextLogo = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 85px;
  font-weight: 800;
  color: #b3da4b;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 55px;
    margin-top: 1rem;
    line-height: 1.2;
  }
`;

export const Tagline = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  max-width: 600px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    padding: 0 1rem;
  }
`;

export const Description = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
`;

export const StoreButton = styled.img`
  width: 160px;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

export const GooglePlay = styled(StoreButton).attrs({
  src: "/images/google-play.svg",
  alt: "Google Play",
})``;

export const AppStore = styled(StoreButton).attrs({
  src: "/images/app-store.svg",
  alt: "App Store",
})``;

export const PhoneImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const PhoneImage = styled.img.attrs({
  src: "",
  alt: "",
})`
  width: 450px;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 300px;
  }
`;
