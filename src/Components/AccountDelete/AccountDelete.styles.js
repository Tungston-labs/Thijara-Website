import styled from "styled-components";


export const PageWrapper = styled.section`
padding: 6rem 3rem 3rem;
background-color: #ffffff;
font-family: "Raleway", sans-serif;
display: flex;
justify-content: center;
`;


export const Card = styled.div`
width: 100%;
max-width: 1200px;
margin: auto;
`;


export const Title = styled.h1`
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


export const SectionTitle = styled.h2`
font-family: "Inter", sans-serif;
font-size: 1.05rem;
font-weight: 600;
color: #000000;
margin-bottom: 0.75rem;
`;


export const Text = styled.p`
font-family: "Inter", sans-serif;
line-height: 1.9;
color: #000000;
text-align: left;
margin-bottom: 1rem;
font-size: 0.95rem;
`;


export const List = styled.ul`
margin-left: 20px;
margin-bottom: 1.5rem;
color: #000000;
`;


export const ListItem = styled.li`
margin-bottom: 0.75rem;
font-family: "Inter", sans-serif;
font-size: 0.95rem;
`;


export const Email = styled.a`
color: #2563eb;
font-weight: 600;
text-decoration: none;
font-family: "Inter", sans-serif;


&:hover {
text-decoration: underline;
}
`;