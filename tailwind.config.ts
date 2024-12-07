import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "var(--background)",
      foreground: {
       DEFAULT:   "var(--foreground)",
        muted: "var(--foreground-muted)",
      },
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        warning: {
          DEFAULT: "var(--warning)",
          muted: "var(--warning-muted)",
        },
        danger: {
          DEFAULT: "var(--danger)",
          muted: "var(--danger-muted)",
        },
      "input-border": "var(--input-border)"
    },
  },
  plugins: [],
} satisfies Config;
