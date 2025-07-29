import React from "react";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Description,
  CardsWrapper,
  Card,
  CardIcon,
  CardTitle,
  CardText,
} from "./HowItWorks.styles";

import { LiaUserLockSolid } from "react-icons/lia";
import { LuMessagesSquare } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <Container>
      <Content>
        <Title>How Thijara Works</Title>
        <Subtitle>Your Seamless Online Produce Trading Journey</Subtitle>
        <Description>
          Thijara simplifies buying and selling fresh fruits and vegetables online across the Gulf region, making your produce sourcing and sales process straightforward and efficient.
        </Description>

        <CardsWrapper>
          <Card>
            <CardIcon>
              <LiaUserLockSolid size={36} />
            </CardIcon>
            <CardTitle>Verified & Trusted Sellers</CardTitle>
            <CardText>
              All sellers must submit valid trade licenses and business documents. This strict verification ensures a secure, trusted trading environment on Thijara.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <LuMessagesSquare size={36} />
            </CardIcon>
            <CardTitle>Direct WhatsApp Communication</CardTitle>
            <CardText>
              Interested buyers contact you directly on WhatsApp for instant communication and smooth deal-making—fast, transparent, and familiar for regional traders.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <BsShop size={36} />
            </CardIcon>
            <CardTitle>Efficient Buyer Discovery</CardTitle>
            <CardText>
              Buyers can browse a wide range of produce from trusted Middle Eastern sellers using smart search and filters—ideal for hotels, restaurants, and markets across Dubai, Riyadh, Doha, and more.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <FaClipboardList size={36} />
            </CardIcon>
            <CardTitle>List Your Wholesale Produce</CardTitle>
            <CardText>
              As a verified seller, you can quickly list fresh fruits and vegetables with key details like type (e.g., seasonal, organic), quantity, harvest origin (e.g., Egypt, Jordan), and packaging. High-quality listings attract serious B2B buyers.
            </CardText>
          </Card>
        </CardsWrapper>
      </Content>
    </Container>
  );
};

export default HowItWorks;
