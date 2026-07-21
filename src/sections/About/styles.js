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

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 992px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const Image = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 380px;
  height: 480px;

  object-fit: cover;

  border-radius: 24px;
  border: 3px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);

  position: relative;
  top: -99px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 992px) {
    width: 320px;
    height: 420px;
    top: 0;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 360px;
    top: 0;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 290px;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  margin: 16px 0 24px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    margin: 14px 0 18px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.9;
  text-align: justify;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};

  padding: 24px;

  border-radius: ${({ theme }) => theme.borderRadius.medium};

  border: 1px solid ${({ theme }) => theme.colors.border};

  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardNumber = styled.h3`
  font-size: clamp(1.8rem, 5vw, 2.2rem);
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled.h4`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const CardDescription = styled.p`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.6;
`;