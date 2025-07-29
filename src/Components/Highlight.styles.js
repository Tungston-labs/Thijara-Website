import styled from 'styled-components';

export const HighlightSection = styled.section`
  background-image: url('/images/green-apple.png'); /* Desktop image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-image: url('/images/green-apple-mobile.png'); /* Mobile image */
    padding: 4rem 1rem;
  }
`;

export const HighlightText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #fff;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 360px;
    line-height: 1.55;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 340px;
    line-height: 1.55;
  }
`;
