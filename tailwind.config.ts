import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F18121',
        'white': '#FFFFFF',
        'darkBlue': '#3F94D5',
        'normalBlue': '#56CCF2',
        'black': '#000000',
        'red': '#FF2853',
        'grey': '#E2E2E2',
        'grey-bg': '#EBEBEB',
        'green': '#8BC34A',
        'purple': '#BD10E0'
      }
    },
  },
  plugins: [],
};
export default config;
