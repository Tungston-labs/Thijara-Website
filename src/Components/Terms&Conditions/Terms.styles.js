// Terms.styles.js
import styled from "styled-components";

export const TermsContainer = styled.section`
  padding: 6rem 3rem 3rem;
  background-color: #ffffff;
  font-family: "Raleway", sans-serif;
`;

export const TermsWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Heading = styled.h2`
  font-family: "Inter", sans-serif;
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
  gap: 1.25rem;
  margin-bottom: 1.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const LeftTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.25rem;
`;

export const LeftSubTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubHeading = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  line-height: 1.9;
  color: #000000;
  text-align: left;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;
