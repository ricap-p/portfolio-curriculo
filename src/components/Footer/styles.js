import styled from "styled-components";

export const Footer = styled.footer`
  padding: 120px 20px 60px;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Subtitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem,5vw,3rem);
  margin-bottom: 25px;
`;

export const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 50px;

  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.8;

  font-size: 1.1rem;
`;

export const ContactList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  margin-bottom: 60px;
`;

export const ContactItem = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.white};

  padding: 14px 22px;

  border-radius: 999px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  transition: .3s;

  &:hover{
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

export const Copy = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: .9rem;
`;