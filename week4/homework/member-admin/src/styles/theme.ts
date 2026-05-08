export const theme = {
  colors: {
    background: "#0f1012",
    text: "#fff",
    textMuted: "#ccc",
    surface: "#2e2e35",
    primary: "#84e1fa",
    primaryHover: "#4ccff2",
    link: "#00ceff",
    foreground: "#0f1012",
    placeholder: "#75798a",
    iconMuted: "#76767f",
    error: "#ff6b6b",
    dropdownHover: "#e8f8fd",
    white: "#fff",
  },
  radius: {
    sm: "8px",
    pill: "100px",
  },
} as const;

export type AppTheme = typeof theme;
