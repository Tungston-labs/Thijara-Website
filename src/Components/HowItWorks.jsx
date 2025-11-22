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
          Connecting Buyers and Sellers of Fresh Produce
          Thijara makes buying and selling fresh fruits and vegetables online across the region easy, fast, and hassle-free for everyone.
        </Description>

        <CardsWrapper>
          <Card>
            <CardIcon>
              <LiaUserLockSolid size={36} />
            </CardIcon>
            <CardTitle>Verified & Trusted Sellers</CardTitle>
            <CardText>
              All sellers on Thijara go through a strict verification process to ensure authenticity. This guarantees that buyers receive fresh, high quality produce. Every transaction is secure, reliable, and from trusted sources.          </CardText>
          </Card>

          <Card>
            <CardIcon>
              <LuMessagesSquare size={36} />
            </CardIcon>
            <CardTitle>Direct Communication</CardTitle>
            <CardText>
              Connect instantly with buyers or sellers via WhatsApp to get quick answers, discuss orders, and negotiate deals easily. This direct communication ensures smooth, efficient, and hassle free trading for everyone on the platform.  </CardText>
          </Card>

          <Card>
            <CardIcon>
              <BsShop size={36} />
            </CardIcon>
            <CardTitle>Efficient Buyer Discovery</CardTitle>
            <CardText>
             Handle orders smoothly from start to finish with streamlined processes. Save time and reduce errors in every transaction. Ensure your wholesale trading is faster, more organized, and hassle free.          </CardText>
          </Card>

          <Card>
            <CardIcon>
              <FaClipboardList size={36} />
            </CardIcon>
            <CardTitle>Connect with Verified Buyers</CardTitle>
            <CardText>
             Easily list your fruits, vegetables, and fresh produce to reach verified buyers instantly. By showcasing your products with clear images, you can highlight their quality and attract more buyers.          </CardText>
          </Card>
        </CardsWrapper>
      </Content>
    </Container>
  );
};

export default HowItWorks;
