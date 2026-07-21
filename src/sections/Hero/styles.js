


import styled from "styled-components";

export const Section = styled.section`

min-height: 100vh;
padding-top: ${({ theme }) => theme.layout.navbarHeight};
background: ${({ theme }) => theme.colors.background};

`;
export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  min-height: calc(
    100vh - ${({ theme }) => theme.layout.navbarHeight}
  );
`;

export const Content = styled.div`

display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing.sm};
max-width: 600px;

`;

export const Greeting = styled.span`

font-size: ${({ theme }) => theme.fontSizes.lg};
color: ${({ theme }) => theme.colors.gray};

`;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  margin-bottom: 8px;

`;
export const Profession = styled.h2`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.xl};
font-weight: 600;
color: ${({ theme }) => theme.colors.primary};
line-height: 1.3;

`;

export const Description = styled.p`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.md};
color: ${({ theme }) => theme.colors.text};
line-height: 1.7;
max-width: 600px;

`;

export const Buttons = styled.div`
display: flex;
align-items: center;
gap: ${({ theme }) => theme.spacing.md};
margin-top: ${({ theme }) => theme.spacing.lg};

`;

export const Image = styled.div`
`;

export const ProfileImage = styled.img`
  width: 360px;
  height: 360px;

  object-fit: cover;

  border-radius: 50%;

  border: 3px solid ${({ theme }) => theme.colors.primary};

  box-shadow: 0 0 25px rgba(255, 122, 0, 0.2);
`;