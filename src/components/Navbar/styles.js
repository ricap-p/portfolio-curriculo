


import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.background};
    z-index: ${({ theme }) => theme.zIndex.navbar};
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
  gap: 60px;

  height: ${({ theme }) => theme.layout.navbarHeight};
`;
export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;

  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 122, 0, 0.35);
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  margin-left: 20px;
`;

export const NavItem = styled.li``;




export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;

  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  flex: 1;
`;

