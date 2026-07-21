export const theme = {
  colors: {
    background: "#0B0F19",
    surface: "#151B2D",
    primary: "#FF7A00",
    primaryHover: "#FF912F",
    white: "#FFFFFF",
    text: "#E5E7EB",
    gray: "#9CA3AF",
    border: "#2A3145",
  },

  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Roboto Mono', monospace",
  },

  fontSizes: {
    sm: "0.875rem", // 14px
    md: "1rem",     // 16px
    lg: "1.125rem", // 18px
    xl: "1.5rem",   // 24px
  },

  layout: {
    maxWidth: "1200px",
    navbarHeight: "80px",
    containerPadding: "24px",
  },

  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "48px",
    xl: "96px",
  },

  shadows: {
    card: "0 8px 24px rgba(0,0,0,.35)",
  },

  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "20px",
  },

  zIndex: {
    navbar: 100,
    modal: 1000,
    tooltip: 2000,
  },
};