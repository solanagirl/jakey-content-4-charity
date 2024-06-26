import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "jakey": "url('/jakeybackground.jpg')",
      },
      colors: {
        "blue": "#0d2c54",
        "green": "#7FB800",
        "light-blue": "#00a6ed",
        "yellow": "#FFB400",
        "tangelo": "#f6511d",
      },
      dropShadow: {
      },
    },
  },
  plugins: [],
};
export default config;
