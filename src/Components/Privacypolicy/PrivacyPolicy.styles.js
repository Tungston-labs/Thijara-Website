// PrivacyPolicy.styles.js
import styled from 'styled-components';

export const PrivacyContainer = styled.section`
  padding: 6rem 3rem 3rem;
  background-color: #FFFFFF;
  font-family: 'Raleway', sans-serif;
`;

export const PrivacyWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Heading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  padding-top: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 2rem;
  margin-bottom: 2.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const LeftTitle = styled.h3` 
   font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #000000;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubHeading = styled.h4`
 font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #000000;
`;
