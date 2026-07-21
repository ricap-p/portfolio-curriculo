import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Subtitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 20px;
`;

export const Description = styled.p`
  max-width: 720px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 70px;
`;

export const Category = styled.div`
  margin-bottom: 80px;
`;

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  margin-bottom: 35px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 28px;
  transition: 0.35s;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;

export const CertificateTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

export const Institution = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 8px;
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 22px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 22px;

  border: none;
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  font-weight: 600;
  font-size: 0.95rem;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: scale(1.05);
  }
`;