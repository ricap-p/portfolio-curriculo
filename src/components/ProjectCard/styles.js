import styled from "styled-components";

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: ${({ theme }) => theme.borderRadius.large};

  overflow: hidden;

  transition: .35s;

  &:hover {
    transform: translateY(-8px);

    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 20px 40px rgba(0,0,0,.35);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 220px;

  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: .5s;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

export const Content = styled.div`
  padding: 24px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.5rem;

  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};

  line-height: 1.7;

  margin-bottom: 20px;
`;

export const Technologies = styled.span`
  display: inline-block;

  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.primary};

  font-size: .9rem;

  font-weight: 600;
`;

export const Buttons = styled.div`
  display: flex;

  gap: 16px;

  flex-wrap: wrap;
`;