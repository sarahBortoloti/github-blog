import { colors } from "./colors";

const baseTheme = (
  theme = {
    colors,
  }
) => ({
  theme,
  colors
});


export const theme = baseTheme();
