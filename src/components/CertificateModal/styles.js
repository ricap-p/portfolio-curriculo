import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  z-index: 9999;
`;

export const Modal = styled.div`
  position: relative;

  width: 100%;
  max-width: 900px;

  background: ${({ theme }) => theme.colors.surface};

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 20px 60px rgba(0,0,0,.5);

  animation: fadeIn .3s ease;

  @keyframes fadeIn{
    from{
      opacity:0;
      transform:scale(.95);
    }

    to{
      opacity:1;
      transform:scale(1);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  font-size: 2rem;

  margin-bottom: 10px;
`;

export const Institution = styled.p`
  color: ${({ theme }) => theme.colors.text};

  font-size: 1.1rem;

  margin-bottom: 8px;
`;

export const Year = styled.span`
  color: ${({ theme }) => theme.colors.gray};

  font-size: .95rem;
`;

export const Buttons = styled.div`
  display: flex;

  gap: 15px;

  margin-top: 30px;

  flex-wrap: wrap;
`;

export const PdfButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};

  color: white;

  text-decoration: none;

  padding: 14px 28px;

  border-radius: 10px;

  font-weight: 600;

  transition: .3s;

  &:hover{
    background:${({ theme }) => theme.colors.primaryHover};

    transform: translateY(-2px);
  }
`;

export const CloseModalButton = styled.button`
  background: transparent;

  border: 2px solid ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.primary};

  padding: 14px 28px;

  border-radius: 10px;

  cursor: pointer;

  font-weight: 600;

  transition: .3s;

  &:hover{
    background:${({ theme }) => theme.colors.primary};

    color:white;
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 20px;
  right: 20px;

  width: 45px;
  height: 45px;

  border: none;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  cursor: pointer;

  font-size: 1.2rem;

  transition: .3s;

  &:hover{
    transform: rotate(90deg);
  }
`;