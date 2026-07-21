import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  max-width: 650px;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;