import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.background};

  z-index: ${({ theme }) => theme.zIndex.navbar};

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  height: ${({ theme }) => theme.layout.navbarHeight};
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  flex-shrink: 0;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;

  text-decoration: none;

  transition: all .3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    transform: scale(1.05);

    box-shadow: 0 0 20px rgba(255,122,0,.35);
  }

  @media (max-width:768px){
    width:48px;
    height:48px;

    font-size:1rem;
  }
`;

export const MobileButton = styled.button`
  display:none;

  background:none;
  border:none;

  cursor:pointer;

  color:${({ theme }) => theme.colors.primary};

  z-index:1001;

  svg{
      font-size:2rem;
  }

  @media(max-width:768px){
      display:flex;
      align-items:center;
      justify-content:center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    position: fixed;
    top: ${({ theme }) => theme.layout.navbarHeight};
    right: 0;

    width: 100%;
    height: calc(100vh - ${({ theme }) => theme.layout.navbarHeight});

    background: ${({ theme }) => theme.colors.background};

    flex-direction: column;
    justify-content: center;
    align-items: center;

    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"};

    transition: transform .35s ease;
  }
`;


export const NavList = styled.ul`
  display: flex;
  align-items: center;

  gap: 36px;

  margin: 0;
  padding: 0;

  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 28px;

    width: 100%;
  }
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  position: relative;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;

  text-decoration: none;

  transition: color 0.3s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -6px;

    width: 0;
    height: 2px;

    background: ${({ theme }) => theme.colors.primary};

    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
