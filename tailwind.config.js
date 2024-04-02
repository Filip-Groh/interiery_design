/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#1cd1db",
          // "secondary": "#FF8F00",
          // "accent": "#0000ff",
          "neutral": "#ffffff",
          // "base-100": "#404040",
          // "base-200": "#202020",
          // "base-300": "#000000"
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#10c9d0",
          // "secondary": "#FF8F00",
          // "accent": "#0000ff",
          "neutral": "#000000",
          // "base-100": "#bfbfbf",
          // "base-200": "#dfdfdf",
          // "base-300": "#ffffff"
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
  darkMode: "class",
}

// Primary - Most Important Buttons
// Secondary - Highlights of Most Important Buttons
// Accent - Elements
// Neutral - Text
// Base - Background

// Base 100 - Front
// Base 200 - Middle
// Base 300 - Back