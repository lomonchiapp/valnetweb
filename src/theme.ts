import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";

// Define types for the color tokens
interface ColorTokens {
  [key: number]: string;
}

interface Tokens {
  gray: ColorTokens;
  primary: ColorTokens;
  greenAccent: ColorTokens;
  redAccent: ColorTokens;
  orangeAccent: ColorTokens;
  blueAccent: ColorTokens;
  cyanAccent: ColorTokens;
  
  // Add other color categories if needed
}

// Color Design Tokens
export const tokens = (mode: "light" | "dark"): Tokens => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#2A354E",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#5FBCEE",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        orangeAccent: {
            50: '#E65100',
            100: '#EF6C00',
            200: '#F57C00',
            300: '#FB8C00',
            400: '#FFA726',
            500: '#F37021', // Base color
            600: '#FFB74D',
            700: '#FFCC80',
            800: '#FFE0B2',
            900: '#FFF3E0',
          },
        blueAccent: {
            900: '#0D47A1',
            800: '#1565C0',
            700: '#1976D2',
            600: '#1E88E5',
            500: '#42A5F5',
            400: '#005BAA', // Base color
            300: '#64B5F6',
            200: '#90CAF9',
            100: '#BBDEFB',
            50: '#E3F2FD',
            A100: '#2962FF',
            A200: '#2979FF',
            A400: '#448AFF',
            A700: '#82B1FF',
          },
        cyanAccent: {
          100: "#F3FBFF",
          200: "#BBE7FF",
          300: "#A0D9F8",
          400: "#5FBCEE",
          500: "#2F9BD6",
          600: "#0283C9",
          700: "#0073B1",
          800: "#005E90",
          900: "#003D5F",
        },
      }
    : {
        gray: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#fcfcfc",
          500: "#f2f0f0",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
            50: '#0D47A1',
            100: '#1565C0',
            200: '#1976D2',
            300: '#1E88E5',
            400: '#42A5F5',
            500: '#005BAA', // Base color
            600: '#64B5F6',
            700: '#90CAF9',
            800: '#BBDEFB',
            900: '#E3F2FD',
            A100: '#2962FF',
            A200: '#2979FF',
            A400: '#448AFF',
            A700: '#82B1FF',
          },
          orangeAccent:{
            900: '#E65100',
            800: '#EF6C00',
            700: '#F57C00',
            600: '#FB8C00',
            500: '#F37021',
            400: '#F37021', // Base color
            300: '#FFB74D',
            200: '#FFCC80',
            100: '#FFE0B2',
            50: '#FFF3E0',
          },
        cyanAccent: {
          900: "#F3FBFF",
          800: "#BBE7FF",
          700: "#A0D9F8",
          600: "#5FBCEE",
          500: "#2F9BD6",
          400: "#0283C9",
          300: "#0073B1",
          200: "#005E90",
          100: "#003D5F",
        }
      }),
});

// Mui Theme Settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.cyanAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.cyanAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }),
    },
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

// Context For Color Mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(() => ({
    toggleColorMode: () =>
      setMode((prev) => (prev === "light" ? "dark" : "light")),
  }));

  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  return [theme, colorMode];
};
