// PrivacyPolicy.jsx
import React from "react";
import {
  PrivacyContainer,
  PrivacyWrapper,
  Heading,
  SectionGrid,
  LeftTitle,
  RightContent,
  SubHeading,
  Description,
} from "./PrivacyPolicy.styles";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <PrivacyContainer>
        <PrivacyWrapper>
          <Heading>
            Privacy Policy for Thijara: Your Data, Our Commitment
          </Heading>

          <SectionGrid>
            <LeftTitle>
              Information We Collect for Enhanced Produce Trading
            </LeftTitle>
            <RightContent>
              <Description>
                We collect information to provide and continually improve
                our digital agri-trade services to you.
              </Description>

              <SubHeading>• Personal and Business Information:</SubHeading>

              <Description>
                When you register on Thijara, we meticulously collect personal
                details such as your name, comprehensive contact information
                (verified phone number, business email address), company
                name, and crucial trade license details for regulatory
                compliance and verification.
              </Description>

              <SubHeading>• Product Listing Information:</SubHeading>
              <Description>
                If you are a produce seller, we collect specific details about
                the fresh produce you list, including fruit/vegetable type,
                available quantity, precise origin (e.g., country and region of
                harvest), packaging type, and wholesale pricing details.
              </Description>

              <SubHeading>• App Usage Data:</SubHeading>
              <Description>
                We collect information on how you access and interact with the
                App, such as your interactions with produce listings, search
                queries (e.g., "wholesale dates UAE," "fresh tomato suppliers
                Saudi Arabia"),and direct WhatsApp communication patterns. This
                helps us optimize your online produce buying and selling
                experience.
              </Description>

              <SubHeading>• Device Information:</SubHeading>
              <Description>
                We may collect information about the device you use to access
                the App, including IP address,operating system, and unique
                device identifiers, to ensure optimal performance of our B2B
                marketplace.
              </Description>
            </RightContent>
          </SectionGrid>

          <SectionGrid>
            <LeftTitle>
              How We Utilize Your Information for Seamless Agri–Business
              Operations
            </LeftTitle>
            <RightContent>
              <Description>
                We use the collected information for various purposes to deliver
                and enhance the Thijara experience:
              </Description>

              <SubHeading>
                • To Provide and Maintain Core Functionality:
              </SubHeading>
              <Description>
                This includes facilitating accurate produce
                listings,robust buyer-seller connections, and direct WhatsApp
                communication for efficient trade discussions.
              </Description>

              <SubHeading>• To Verify User Authenticity:</SubHeading>
              <Description>
                We rigorously use trade license and business registration
                details to verify the legitimacy and credibility of fresh
                produce sellers, thereby building an inherently secure and
                trusted online marketplace for agricultural goods.
              </Description>

              <SubHeading>• To Improve and Personalize Experience:</SubHeading>
              <Description>
                 We analyze usage data to understand user preferences and
                continually optimize App features and content, specifically
                tailored for Middle East fruit and vegetable trade dynamics.
              </Description>

              <SubHeading>• To Communicate Effectively With You:</SubHeading>
              <Description>
                 We may use your contact information to send you critical
                updates,notifications, and responsive customer support messages
                related to your fresh produce deals and market opportunities.
              </Description>

              <SubHeading>
                • For Robust Security and Fraud Prevention:
              </SubHeading>
              <Description>
                We employ your information to detect, prevent, and decisively
                address any fraudulent or illegal activities on our cutting-edge
                digital produce platform.
              </Description>
              <SubHeading>
                • To Comply with Legal and Regulatory Obligations:
              </SubHeading>
              <Description>
                We may use and disclose your information to comply with
                applicable laws, regulations, and legal processes pertinent
                to agricultural trading in the GCC region.
              </Description>
            </RightContent>
          </SectionGrid>

          <SectionGrid>
            <LeftTitle>
              Sharing Your Information Facilitating B2B Produce Connections
            </LeftTitle>
            <RightContent>

               <Description>We may share your information in the following circumstances:</Description>
              <SubHeading>
                • With Other Users (for Trade Facilitation):
              </SubHeading>
              <Description>
                 When you list wholesale produce as a seller, relevant product
                details and your essential contact information (e.g., verified
                WhatsApp number) will be clearly visible to potential bulk
                buyers to facilitate direct, real-time communication for fruit
                and vegetable transactions.
              </Description>

              <SubHeading>• With Essential Service Providers:</SubHeading>
              <Description>
                 We may share your information with trusted third-party vendors
                and service providers who perform critical services on our
                behalf (e.g., secure data hosting, advanced analytics for
                our agri-tech platform). These providers are contractually
                obligated to protect your information diligently.
              </Description>

              <SubHeading>• For Legal Compliance: </SubHeading>
              <Description>
                We may disclose your information if required by law or in
                response to valid legal requests by public authorities within
                the Middle East trade sector.
              </Description>

              <SubHeading>• In Case of Business Restructuring: </SubHeading>
              <Description>
                 If Thijara is involved in a merger, acquisition, or asset
                sale, your information may be transferred as part of that
                transaction, with appropriate safeguards in place.
              </Description>
            </RightContent>
          </SectionGrid>

          <SectionGrid>
            <LeftTitle>
              Data Security Protecting Your Online Trading Information
            </LeftTitle>
            <RightContent>
              <Description>
                We implement robust security measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure for online trading
                platforms, and we continuously strive to enhance our defenses.
              </Description>
            </RightContent>
          </SectionGrid>

          <SectionGrid>
            <LeftTitle>
              Your Choices Managing Your Digital Produce Trading Account
            </LeftTitle>
            <RightContent>
              <Description>
                • Access and Correction: You may access and update your account
                information directly through the App, your personalized Middle
                East produce trading account. 
              </Description>
              <Description>
                • Deletion: Deletion: You may request the deletion of your
                account and personal data, subject to legal and operational
                requirements inherent in managing digital marketplaces for
                commercial trade.
              </Description>
            </RightContent>
          </SectionGrid>

          <SectionGrid>
            <LeftTitle>Changes to This Privacy Policy</LeftTitle>
            <RightContent>
              <Description>
                We may update our Privacy Policy from time to time to reflect
                evolving practices. We will notify you of any material changes
                by posting the new Privacy Policy on this page and prominently
                updating the "Last Updated" date.
              </Description>
            </RightContent>
          </SectionGrid>

          <SectionGrid>
            <LeftTitle>Contact Us</LeftTitle>
            <RightContent>
              <Description>
                If you have any questions or concerns about this Privacy Policy
                or your data on Thijara, please contact us at [Your Contact
                Email Address].
              </Description>
              <Description>
                <strong>Last Updated: July 19, 2025</strong>
              </Description>
            </RightContent>
          </SectionGrid>
        </PrivacyWrapper>
      </PrivacyContainer>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
