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
  max-width: 700px;
  margin-bottom: 60px;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 80px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 30px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  font-size: 2rem;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
`;

export const Company = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: 10px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;