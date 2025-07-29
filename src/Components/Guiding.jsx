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
            Our mission is to empower fruit and vegetable traders and fresh produce buyers in the Middle East by providing the region's most efficient, secure, and direct digital platform that revolutionizes produce sourcing, streamlines agricultural sales, and fosters unprecedented growth and connectivity within the Middle East fresh produce market.
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
            Our vision is to become the undisputed leading digital marketplace for fruits and vegetables in the Middle East, setting the global standard for seamless B2B produce trade, unparalleled transparency, and unwavering trust within the entire agricultural supply chain, transforming how fresh produce moves across the region.
          </CardText>
        </Card>
      </CardContainer>
    </SectionWrapper>
  );
};

export default Guiding;
 