import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 4rem 1.5rem;
  text-align: center;
  background-image: url("/images/background2.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 2.2rem;
  font-weight: 760;
  margin-bottom: 0.5rem;
  color: #000000;

  @media(max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  color: #000;
  margin-bottom: 2rem;

  @media(max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  background: #FAFCF2;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 90%;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  @media(max-width: 480px) {
    padding: 1.5rem 1.25rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media(max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const IconLeft = styled.div`
  font-size: 1.9rem;
  color: #2A6135;

  @media(max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const IconRight = styled.div`
  font-size: 1.4rem;
  color: #114A32;

  @media(max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const CardTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  color: #124B32;
  font-weight: 800;
  flex: 1;
  margin: 0 1rem;
  text-align: left;

  @media(max-width: 480px) {
    font-size: 1.25rem;
    margin: 0 0.75rem;
  }
`;

export const CardText = styled.p`
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  color: #050702;
  text-align: left;
  line-height: 1.8;
  word-spacing: normal;
  margin: 0 auto;

  @media(max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.6;
    max-width: 95%;
    width: 95%;
    text-align: center;
    margin: 0 auto;
  }
`;

