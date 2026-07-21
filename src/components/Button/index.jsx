import { StyledButton } from "./styles";

const Button = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;