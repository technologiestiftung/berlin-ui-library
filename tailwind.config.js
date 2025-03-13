const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  safelist: ["dark"],
  prefix: "ts-",  // All utility classes will be prefixed with "ts-"
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        desktop: "1181px",
      },
      boxShadow: {
        default: "0 0 5px 1px rgba(23, 111, 193, 0.3)",
        "default-black": "0 0 5px 1px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "focus-blue": "#176fc1",
        "link-blue": "#1049cc",
        culture: "#71A8F5",
        sport: "#67b18d",
        education: "#fcc832",
        leisure: "#EC7AA0",
        separator: "#dddddd",
        "berlin-grey": "#777777",
        "berlin-grey-dark": "#545454",
        "berlin-grey-darker": "#454545", // #454545
        "berlin-grey-light": "#f5f5f5", // neutral-100
        "berlin-grey-medium": "#d9d9d9",
        "berlin-grey-hover": "#efefef",
        "berlin-pink": "#F5B4CB", // fuchsia-300
        "berlin-green": "#67B18D", // emerald-400
        "berlin-light-green": "#E2F1EB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["BerlinTypeWeb", ...fontFamily.sans], // Use the custom font
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    preflight: false,
  },
};