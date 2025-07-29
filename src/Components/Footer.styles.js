import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #E1F4F1;
  padding: 2rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: auto;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;


export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-width: 250px;

 @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

`;


export const Logo = styled.div`
  width: 170px;
  height: 70px;
  background: url('/images/loogoo.svg') no-repeat center;
  background-size: contain;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
  }

`;

export const ContactItem = styled.div` 
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  

`;

export const GetInTouchTitle = styled.h4`  
   
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.9rem; 
  padding-top: -2rem;
 
`;

export const GetInTouchText = styled.p` 
   font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const StoreButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const StoreButton = styled.div`
  width: 100px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;

  &.google {
    background-image: url('/images/google-play.svg');
  }

  &.apple {
    background-image: url('/images/app-store.svg');
  }
`;

export const NavLinks = styled.div`  
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;

export const NavLink = styled(RouterLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;

 &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #768F45;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;

  svg {
    cursor: pointer;

    &:hover {
      color: #768F45;
    }
  }
`;

export const Copyright = styled.p`  
   font-family: 'Inter', sans-serif;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;

  span {
    color: #B3DA4B;
    font-weight: 600;
  }
`;


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

// export const NavLinks = styled.div`
//   font-family: 'Inter', sans-serif;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   gap: 1.2rem;
//   flex: 1;
//   min-width: 250px;

//   @media (max-width: 768px) {
//     align-items: center;
//     border-top: 1px solid #ccc;
//     border-bottom: 1px solid #ccc;
//     padding: 1rem 0;
//     width: 100%;

//     a {
//       width: 100%;
//       text-align: center;
//       padding: 0.75rem 0;
//       border-bottom: 1px solid #ccc;

//       &:last-child {
//         border-bottom: none;
//       }
//     }
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

// export const GetInTouchTitle = styled.h4`
//   font-family: 'Inter', sans-serif;
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin-bottom: 0.6rem;
// `;

// export const GetInTouchText = styled.p`
//   font-family: 'Inter', sans-serif;
//   font-size: 0.95rem;
//   line-height: 1.4;
// `;

// export const SocialIcons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
//   font-size: 1.4rem;

//   svg {
//     cursor: pointer;

//     &:hover {
//       color: #768F45;
//     }
//   }
// `;

// export const StoreButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin-top: 0.5rem;

//   @media (max-width: 768px) {
//     flex-direction: row;
//   }
// `;

// export const StoreButton = styled.div`
//   width: 120px;
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

// export const Copyright = styled.p`
//   font-family: 'Inter', sans-serif;
//   text-align: center;
//   margin-top: 2rem;
//   font-size: 0.9rem;

//   span {
//     color: #B3DA4B;
//     font-weight: 600;
//   }
// `;
