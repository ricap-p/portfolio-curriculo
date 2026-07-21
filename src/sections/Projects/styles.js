import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.background};

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
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 600;

  text-transform: uppercase;

  letter-spacing: 2px;

  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  font-size: clamp(2rem, 5vw, 3rem);

  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.8;

  max-width: 650px;

  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;