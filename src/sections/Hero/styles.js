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

  min-height: calc(
    100vh - ${({ theme }) => theme.layout.navbarHeight}
  );

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 80px;

  @media (max-width: 992px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    justify-content: center;
    align-items: center;

    text-align: center;

    gap: 40px;

    padding: 40px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  max-width: 600px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Greeting = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};

  font-size: ${({ theme }) => theme.fontSizes.lg};

  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};

  font-size: clamp(2.8rem, 6vw, 4.5rem);

  font-weight: 700;

  color: ${({ theme }) => theme.colors.white};

  line-height: 1.1;

  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: clamp(2.2rem, 8vw, 3.2rem);
  }
`;

export const Profession = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};

  font-size: ${({ theme }) => theme.fontSizes.xl};

  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary};

  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};

  font-size: ${({ theme }) => theme.fontSizes.md};

  color: ${({ theme }) => theme.colors.text};

  line-height: 1.8;

  max-width: 560px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};

    max-width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};

  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    justify-content: center;

    width: 100%;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
`;

export const ProfileImage = styled.img`
  width: 360px;
  height: 360px;

  object-fit: cover;

  object-position: center;

  border-radius: 50%;

  border: 3px solid ${({ theme }) => theme.colors.primary};

  box-shadow: 0 0 25px rgba(255, 122, 0, 0.25);

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 992px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;