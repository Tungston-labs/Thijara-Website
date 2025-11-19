// import styled from 'styled-components';
// import { NavLink as RouterLink } from 'react-router-dom';

// export const FooterContainer = styled.footer`
//   background-color: #E1F4F1;
//   padding: 2rem;
// `;

// export const FooterWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   max-width: 1400px;
//   margin: auto;
//   align-items: flex-end;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 2rem;
//   }
// `;


// export const LeftSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   flex: 1;
//   min-width: 250px;

//  @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//   }

// `;


// export const Logo = styled.div`
//   width: 170px;
//   height: 70px;
//   background: url('/images/loogoo.svg') no-repeat center;
//   background-size: contain;

//   @media (max-width: 768px) {
//     margin: auto;
//   }
// `;

// export const ContactInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
  
//   @media (max-width: 768px) {
//     align-items: center;
//   }

// `;

// export const ContactItem = styled.div` 
//   font-family: 'Inter', sans-serif;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

  

// `;

// export const GetInTouchTitle = styled.h4`  
//   font-family: 'Inter', sans-serif;
//   font-size: 1rem;
//   font-weight: bold;
//   margin-bottom: 0.9rem; 
//   padding-top: -2rem;
 
// `;

// export const GetInTouchText = styled.p` 
//    font-family: 'Inter', sans-serif;
//   font-size: 0.95rem;
//   line-height: 1.4;
// `;

// export const StoreButtons = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 0.5rem;
// `;

// export const StoreButton = styled.div`
//   width: 100px;
//   height: 40px;
//   background-repeat: no-repeat;
//   background-size: contain;

//   &.google {
//     background-image: url('/images/google-play.svg');
//   }

//   &.apple {
//     background-image: url('/images/app-store.svg');
//   }
// `;

// export const NavLinks = styled.div`  
//   font-family: 'Inter', sans-serif;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   flex: 1;
//   min-width: 250px;

//   @media (max-width: 768px) {
//     align-items: center;
//     width: 100%;
//     border-top: 1px solid #ddd;
//     border-bottom: 1px solid #ddd;
//   }
// `;

// export const NavLink = styled(RouterLink)`
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   font-size: 1rem;

//  &:first-child {
//     border-top: none;
//   }

//   &:last-child {
//     border-bottom: none;
//   }

//   &:hover {
//     color: #768F45;
//   }
// `;

// export const RightSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 0.75rem;
//   flex: 1;
//   min-width: 250px;

//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//     width: 100%;
//   }
// `;


// export const SocialIcons = styled.div`
//   display: flex;
//   gap: 1rem;
//   font-size: 1.4rem;

//   svg {
//     cursor: pointer;

//     &:hover {
//       color: #768F45;
//     }
//   }
// `;

// export const Copyright = styled.p`
//   font-family: 'Inter', sans-serif;
//   text-align: center;
//   margin-top: 2rem;
//   font-size: 0.9rem;

//   /* Normal span styling if needed */
//   span {
//     color: #B3DA4B;
//     font-weight: 600;
//   }

//   /* Link styling */
//   a.tungston {
//     color: #B3DA4B;
//     font-weight: 600;
//     text-decoration: none;   /* Removes underline */
//     cursor: pointer;
//   }

//   a.tungston:hover {
//     opacity: 0.8;            /* Optional hover effect */
//   }
// `;

// import styled from 'styled-components';
// import { NavLink as RouterLink } from 'react-router-dom';

// export const FooterContainer = styled.footer`
//   background-color: #E1F4F1;
//   padding: 2rem;
// `;

// export const FooterWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   max-width: 1400px;
//   margin: auto;
//   align-items: flex-end;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 2rem;
//   }
// `;

// export const LeftSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   flex: 1;
//   min-width: 250px;

//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//   }
// `;

// export const Logo = styled.div`
//   width: 170px;
//   height: 70px;
//   background: url('/images/loogoo.svg') no-repeat center;
//   background-size: contain;

//   @media (max-width: 768px) {
//     margin: auto;
//   }
// `;

// export const ContactInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   @media (max-width: 768px) {
//     align-items: center;
//   }
// `;

// export const ContactItem = styled.div`
//   font-family: 'Inter', sans-serif;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// export const GetInTouchTitle = styled.h4`
//   font-family: 'Inter', sans-serif;
//   font-size: 1rem;
//   font-weight: bold;
//   margin-bottom: 0.9rem;
//   padding-top: -2rem;
//   margin-right: 125px;
//   margin-right:30,
// `;

// export const StoreButtons = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 0.5rem;
// `;

// export const StoreButton = styled.div`
//   width: 100px;
//   height: 40px;
//   background-repeat: no-repeat;
//   background-size: contain;

//   &.google {
//     background-image: url('/images/google-play.svg');
//   }

//   &.apple {
//     background-image: url('/images/app-store.svg');
//   }
// `;

// export const NavLinks = styled.div`
//   font-family: 'Inter', sans-serif;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   flex: 1;
//   min-width: 250px;

//   @media (max-width: 768px) {
//     align-items: center;
//     width: 100%;
//     border-top: 1px solid #ddd;
//     border-bottom: 1px solid #ddd;
//   }
// `;

// export const NavLink = styled(RouterLink)`
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   font-size: 1rem;

//   &:hover {
//     color: #768F45;
//   }
// `;

// export const RightSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 0.75rem;
//   flex: 1;
//   min-width: 250px;

//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//     width: 100%;
//   }
// `;

// export const Copyright = styled.p`
//   font-family: 'Inter', sans-serif;
//   text-align: center;
//   margin-top: 2rem;
//   font-size: 0.9rem;

//   a.tungston {
//     color: #B3DA4B;
//     font-weight: 600;
//     text-decoration: none;
//   }

//   a.tungston:hover {
//     opacity: 0.8;
//   }
// `;

import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #E1F4F1;
  padding: 2rem 1.5rem;
`;

/* FIX LARGE SCREEN LAYOUT */
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1400px;
  margin: auto;
  gap: 2rem;

  /* MOBILE — leave untouched */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    text-align: center;
  }
`;

/* LEFT SECTION */
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* IMPORTANT — STOP STRETCHING ON LARGE SCREENS */
  width: 30%;

  /* MOBILE stays same */
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 170px;
  height: 70px;
  background: url('/images/loogoo.svg') no-repeat center;
  background-size: contain;

  @media (max-width: 480px) {
    width: 150px;
    height: 60px;
  }
`;

export const GetInTouchTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;

  /* MOBILE FIRST — keep your mobile layout exactly same */
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;

  /* DESKTOP ONLY — will NOT affect mobile */
  @media (min-width: 769px) {
    text-align: left;     /* desktop alignment */
    margin-top: 0;        /* reset desktop values if needed */
    margin-bottom: 0;     /* reset desktop values if needed */
    margin-right:8rem;
  }
`;

export const GetInTouchTitles = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;

  /* Desktop fix — align heading left */
  text-align: left;

  /* Mobile view stays exactly the same */
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
    text-align: center;
  }
`;


export const StoreButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StoreButton = styled.div`
  width: 120px;
  height: 45px;
  background-repeat: no-repeat;
  background-size: contain;

  &.google {
    background-image: url('/images/google-play.svg');
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 40px;
  }
`;

/* CENTER NAV LINKS — FIXED DESKTOP SPACING */
export const NavLinks = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  gap: 2rem;

  /* THIS FIXES DESKTOP BREAKING */
  width: 40%;
  text-align: center;

  /* MOBILE — leave untouched */
  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.2rem 0;
    border-top: 1px solid #c8d8d5;
    border-bottom: 1px solid #c8d8d5;
  }
`;

export const NavLink = styled(RouterLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    color: #768F45;
  }
`;

/* RIGHT SECTION — FIX DESKTOP ALIGNMENT */
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;

  /* FIX — prevent stretching */
  width: 30%;
  text-align: right;

  /* MOBILE unchanged */
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ContactItem = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.1rem;
  }
`;

export const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;

  a.tungston {
    color: #B3DA4B;
    font-weight: 600;
    text-decoration: none;
  }
  a.tungston:hover {
    opacity: 0.8;
  }
`;
