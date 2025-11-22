// import React from 'react';
// import {
//   FooterContainer,
//   FooterWrapper,
//   LeftSection,
//   Logo,
//   ContactInfo,
//   ContactItem,
//   NavLinks,
//   NavLink,
//   RightSection,
//   SocialIcons,
//   StoreButtons,
//   StoreButton,
//   GetInTouchTitle,
//   GetInTouchText,
//   Copyright
// } from './Footer.styles';

// import { TbMailFilled } from 'react-icons/tb';
// import { FaPhone } from 'react-icons/fa6';
// import { FaFacebook, FaInstagram, FaFlickr } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterWrapper>
//         <LeftSection>
//           <Logo />
//           <ContactInfo>
//             <ContactItem><TbMailFilled />Thijaraofficials@gmail.com</ContactItem>
//             <ContactItem><FaPhone /> +91 7655736021</ContactItem>
//           </ContactInfo>
//           <div>
//             <GetInTouchTitle>Download the app now!</GetInTouchTitle>
//             <StoreButtons>
//               <a
//                 href="https://play.google.com/store/apps/details?id=com.thijara"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <StoreButton className="google" />
//               </a>

//               {/* <StoreButton className="apple" /> */}
//             </StoreButtons>
//           </div>
//         </LeftSection>

//         <NavLinks>
//           <NavLink to="/#about">About</NavLink>
//           <NavLink to="/#how-it-works">How it works</NavLink>
//           <NavLink to="/privacy-policy">Privacy</NavLink>
//           <NavLink to="/terms">Terms</NavLink>
//         </NavLinks>

//         <RightSection>
//           <GetInTouchTitle>Get in Touch</GetInTouchTitle>
//           <GetInTouchText>
//             Questions or Feedback?<br />
//             We’d love to hear from you
//           </GetInTouchText>
//           <SocialIcons>
//             <FaFacebook />
//             <FaInstagram />
//             <FaFlickr />
//           </SocialIcons>
//         </RightSection>
//       </FooterWrapper>
//       <Copyright>
//         © Copyright 2025, Thijara. Designed by{" "}
//         <a
//           href="https://tungstonlabs.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="tungston"
//         >
//           Tungston Labs
//         </a>.
//       </Copyright>


//     </FooterContainer>
//   );
// };

// export default Footer;
import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  LeftSection,
  Logo,
  ContactInfo,
  ContactItem,
  NavLinks,
  NavLink,
  RightSection,
  StoreButtons,
  StoreButton,
  GetInTouchTitle,
  Copyright,
  GetInTouchTitles,
} from './Footer.styles';

import { TbMailFilled } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>

        {/* LEFT SECTION */}
        <LeftSection>
          <Logo />
          <div>
            <GetInTouchTitles>Download the app now!</GetInTouchTitles>
            <StoreButtons>
              <a
                href="https://play.google.com/store/apps/details?id=com.thijara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StoreButton className="google" />
              </a>
            </StoreButtons>
          </div>
        </LeftSection>

        {/* CENTER NAV LINKS */}
        <NavLinks>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#how-it-works">How it works</NavLink>
          <NavLink to="/privacy-policy">Privacy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
        </NavLinks>

        {/* RIGHT SECTION — NOW CONTAINS EMAIL + PHONE */}
        <RightSection>
          <GetInTouchTitle>Contact Us</GetInTouchTitle>
          <ContactInfo>
            <ContactItem>
              <TbMailFilled />
              <a href="mailto:thijaraofficials@gmail.com">
                thijaraofficials@gmail.com
              </a>
            </ContactItem>
            <ContactItem><FaPhone />+971 55 573 6021</ContactItem>
          </ContactInfo>
        </RightSection>

      </FooterWrapper>

      <Copyright>
        © Copyright 2025, Thijara. Designed by{" "}
        <a
          href="https://tungstonlabs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="tungston"
        >
          Tungston Labs
        </a>.
      </Copyright>

    </FooterContainer>
  );
};

export default Footer;
