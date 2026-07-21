import styled from "styled-components";

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 16px 32px;

  background: ${({ theme, variant }) =>
    variant === "outline"
      ? "transparent"
      : theme.colors.primary};

  color: ${({ theme, variant }) =>
    variant === "outline"
      ? theme.colors.primary
      : theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;

  border: ${({ theme, variant }) =>
    variant === "outline"
      ? `2px solid ${theme.colors.primary}`
      : "none"};

  border-radius: 999px;

  cursor: pointer;
  text-decoration: none;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);

    background: ${({ theme, variant }) =>
      variant === "outline"
        ? "rgba(255,122,0,0.08)"
        : theme.colors.primaryHover};

    box-shadow: 0 10px 25px rgba(255, 122, 0, 0.2);
  }

  &:hover svg {
    transform: rotate(-10deg) scale(1.1);
  }

  &:active {
    transform: translateY(0);
  }
`;