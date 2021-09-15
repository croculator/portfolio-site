import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {

      blur: "rgba(0, 0, 0, 0.5)",
      border: "#424242",

      gray100: "#424242",
      gray200: "#616161",
      gray300: "#757575",
      gray400: "#9E9E9E",
      gray50: "#212121",
      gray500: "#BDBDBD",
      gray600: "#E0E0E0",
      gray700: "#EEEEEE",
      gray800: "#F5F5F5",
      gray900: "#FAFAFA",

      hiContrast: "#ffffff",
      loContrast: "#000000",
      table: "transparent",
      black: "#000000",
      white: "#ffffff",
      blue: "#52a9ff",
      green: "#26B38D",
      highlighter: "#E6A6BE",
      red: "#FF4343",
      beige: "#FAFAFA",
      darkBeige: "#EEE8DF",

      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",

      purple100: "hsl(252,100%,99%)",
      purple200: "hsl(252,100%,98%)",
      purple300: "hsl(252,100%,94%)",
      purple400: "hsl(252,75%,84%)",
      purple500: "hsl(252,78%,60%)",
      purple600: "hsl(252,80%,53%)"
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px"
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px"
    },
    fontSizes: {
      1: "8px",
      2: "10px",
      3: "15px",
      4: "13px",
      5: "17px",
      6: "22px",
      7: "28px",
      8: "35px",
      9: "44px",
      10: "55px",
      11: "69px",
    },
    fonts: {
      system: "system-ui",
      sans: "Inter, sans-serif",
      mono: "Fira Mono, monospace",
      inconsolata: "Inconsolata, monospace",
      telegraf: "telegraf"
    }
  },
  media: {
    bp1: `(min-width: 520px)`,
    bp2: `(min-width: 900px)`
  },

  utils: {
    marginX: (config) => (
      value: keyof typeof config["theme"]["space"] | string
    ) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (config) => (
      value: keyof typeof config["theme"]["space"] | string
    ) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (config) => (
      value: keyof typeof config["theme"]["space"] | string
    ) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (config) => (
      value: keyof typeof config["theme"]["space"] | string
    ) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
});

export const lightTheme = {
  blur: "rgba(255, 255, 255, 0.5)",
  border: "#E0E0E0",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray50: "#FAFAFA",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",
  hiContrast: "#000000",
  loContrast: "#ffffff",
  table: "#FCFCFC",
};

const media = {
  bp1: `(min-width: 520px)`,
  bp2: `(min-width: 900px)`,
  bp3: `(min-width: 1200px)`,
  bp4: `(min-width: 1580px)`,
  motion: `(prefers-reduced-motion)`,
  hover: `(hover: hover)`,
  dark: `(prefers-color-scheme: dark)`,
  light: `(prefers-color-scheme: light)`,
};