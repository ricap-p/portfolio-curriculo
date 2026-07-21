import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Image = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
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

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  margin: 16px 0 24px;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.8;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  margin-top: 24px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardNumber = styled.h3`
  font-size: 2rem;
  font-weight: 700;
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