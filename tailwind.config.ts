import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange_50": "#ff9500",
        "orange_70": "#ffbf66",
        "orange_75": "#ffca80",
        "orange_80": "#ffd499",
        "orange_90": "#ffeacc",
        "orange_95": "#fff4e5",
        "orange_97": "#fff9f0",
        "orange_99": "#fffdfa",
        "white_90": "#e4e4e7",
        "white_95": "#f1f1f3",
        "white_97": "#f7f7f8",
        "white_99": "#fcfcfd",
        "grey_10": "#191919",
        "grey_15": "#262626",
        "grey_20": "#333333",
        "grey_30": "#4c4c4d",
        "grey_35": "#59595a",
        "grey_40": "#656567",
        "grey_60": "#98989a",
        "grey_70": "#b3b3b3",
      },
      transformOrigin: {
        "play-video": "50% 50%"
      },
      screens: {
        "sm": "375px",
        "laptop": "1400px"
      }
    },
  },
  plugins: [],
};
export default config;
