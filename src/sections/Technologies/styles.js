import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;

  @media (max-width: 992px) {
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 70px 0;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled.span`
  display: inline-block;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary};

  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  margin-top: 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;

  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  max-width: 700px;

  margin-top: 20px;
  margin-bottom: 60px;

  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.8;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CardIcon = styled.div`
  width: 80px;
  height: 80px;

  margin: 0 auto 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 122, 0, 0.08);

  color: ${({ theme }) => theme.colors.primary};

  font-size: 2.8rem;

  transition: 0.3s;

  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    font-size: 2.4rem;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};

  padding: 32px 24px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  text-align: center;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);

    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 15px 35px rgba(255, 122, 0, 0.15);
  }

  &:hover ${CardIcon} {
    transform: scale(1.15);
  }

  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 12px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;

  color: ${({ theme }) => theme.colors.white};
`;

export const CardLevel = styled.span`
  display: inline-block;

  margin-top: 16px;
  padding: 8px 16px;

  border-radius: 999px;

  background: rgba(255, 122, 0, 0.1);

  color: ${({ theme }) => theme.colors.primary};

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 56px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;