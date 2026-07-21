

import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;

`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};

`;

export const Subtitle = styled.span`

  display: inline-block;

  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary};

  text-transform: uppercase;
  letter-spacing: 2px;

`;


export const Title = styled.h2`
  margin-top: 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;

  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`

  margin-top: 20px;
  margin-bottom: 60px;

  max-width: 700px;

  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.8;

`;


export const Grid = styled.div`

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 24px;

`;


export const CardIcon = styled.div`
  width: 80px;
  height: 80px;

  margin: 0 auto 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255,122,0,.08);

  color: ${({ theme }) => theme.colors.primary};

  font-size: 2.8rem;

  transition: all .3s ease;
`;


export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};

  padding: 32px 24px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  transition: all .3s ease;

  cursor: pointer;

  text-align: center;

  &:hover {
    transform: translateY(-8px);

    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 15px 35px rgba(255,122,0,.15);
  }

  &:hover ${CardIcon}{
    transform: scale(1.15);
}
`;


export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};

  font-size: ${({ theme }) => theme.fontSizes.lg};

  font-weight: 600;

  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 12px;
`;


export const CardLevel = styled.span`
  display: inline-block;

  margin-top: 16px;

  padding: 8px 16px;

  border-radius: 999px;

  background: rgba(255,122,0,.10);

  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSizes.sm};

  font-weight: 600;
`;

export const ButtonContainer = styled.div`
 display: flex;
 justify-content: center;

 margin-top: 56px;


`;

