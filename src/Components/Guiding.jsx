import React from 'react';
import {
  SectionWrapper,
  Title,
  Subtitle,
  CardContainer,
  Card,
  CardHeader,
  IconLeft,
  IconRight,
  CardTitle,
  CardText
} from './Guiding.styles';

// ✅ IMPORT ALL ICONS PROPERLY
import { TbTargetArrow } from "react-icons/tb";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa"; 

const Guiding = () => {
  return (
    <SectionWrapper>
      <Title>Our Guiding Principle</Title>
      <Subtitle>
        The core values that drive our purpose and define our path forward
      </Subtitle>

      <CardContainer>
        {/* Mission Card */}
        <Card>
          <CardHeader>
            <IconLeft><TbTargetArrow size={30} color="#2A6135" /></IconLeft>
            <CardTitle>Mission Statement</CardTitle>
            <IconRight><BsFillArrowUpRightCircleFill size={22} color="#2A6135" /></IconRight>
          </CardHeader>
          <CardText>
            Our mission is to help fruit and vegetable traders and buyers in the Middle East by offering a safe, fast, and easy-to-use digital platform. We make sourcing fresh produce simple, improve agricultural sales, and create better connections to support growth in the region’s fresh produce market.
          </CardText>
        </Card>

        {/* Vision Card */}
        <Card>
          <CardHeader>
            <IconLeft><FaEye size={30} color="#2A6135" /></IconLeft>
            <CardTitle>Vision Statement</CardTitle>
            <IconRight><BsFillArrowUpRightCircleFill size={22} color="#2A6135" /></IconRight>
          </CardHeader>
          <CardText>
           Our vision is to make trading fruits and vegetables in the Middle East easy, fast, and reliable. We want every trader to grow their business with confidence and connect smoothly with buyers across the region. We aim to create a trusted marketplace where every trader can thrive and the fresh produce trade becomes seamless for all.
          </CardText>
        </Card>
      </CardContainer>
    </SectionWrapper>
  );
};

export default Guiding;
 