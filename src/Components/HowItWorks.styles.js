import styled from "styled-components";

export const Container = styled.section`
  background-image: url("/images/features.png"); // Replace with actual path
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 20px;

  @media (max-width: 768px) {
    background-image: url("/images/features-mobile.png"); // Replace with actual path
    padding: 60px 16px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: #FFFFFF;

  @media (max-width: 768px) {
    color: white;
  }
`;

export const Title = styled.h2`
font-family: "Raleway", sans-serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h3`
font-family: "Segoe UI", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #768F45;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
font-family: "Segoe UI", sans-serif;
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Card = styled.div`
  flex: 1;
  min-width: 260px;
  background-color: #FCFFFB;
  color: #222;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
`;

export const CardIcon = styled.div`
  color: #174733;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h4`
  font-family: "Segoe UI", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #768F45;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
 font-family: "Segoe UI", sans-serif;
  font-size: 15px;
  line-height: 1.6;
`;
