import styled, { css } from "styled-components";

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 16px 32px;

  min-width: fit-content;

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

  white-space: nowrap;

  transition:
    background .3s ease,
    color .3s ease,
    transform .3s ease,
    box-shadow .3s ease;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    transition: transform .3s ease;
  }

  &:hover {
    transform: translateY(-3px);

    background: ${({ theme, variant }) =>
      variant === "outline"
        ? "rgba(255,122,0,.08)"
        : theme.colors.primaryHover};

    box-shadow: 0 10px 25px rgba(255,122,0,.20);
  }

  &:hover svg {
    transform: rotate(-10deg) scale(1.1);
  }

  &:active {
    transform: translateY(0);
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  @media (max-width: 768px) {
    padding: 12px 22px;

    font-size: ${({ theme }) => theme.fontSizes.sm};

    svg {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  @media (max-width: 480px) {
    padding: 10px 18px;

    font-size: .85rem;
  }
`;