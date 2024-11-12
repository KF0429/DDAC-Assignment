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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transform: {
        "translate-z-0": "translateZ(0)",
      },
      boxShadow: {
        ssm: "0 1px 1px 0 rgba(0,0,0,.05)",
        arrow: "0 1px 8px 0 rgba(0,0,0,.09)",
        search: "0 .125rem .25rem rgba(0, 0, 0, .09)",
      },
      borderColor: {
        customhsla: "hsla(0, 0%, 100%, 0.4)",
      },
      spacing: {
        "focus-indicator": "3px",
      },
      important: true,
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(.4,0,.2,1)",
        "custom-bezier2": "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      transitionProperty: {
        "margin-top": "margin-top",
        top: "top",
      },
    },
  },
  plugins: [],
};
export default config;
