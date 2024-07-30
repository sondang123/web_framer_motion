import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".typo-s64-w400": {
          fontSize: "64px",
          fontWeight: "400",
        },
        ".typo-s56-w800": {
          fontSize: "56px",
          fontWeight: "800",
        },
        ".typo-s48-w600": {
          fontSize: "48px",
          fontWeight: "600",
        },
        ".typo-s48-w500": {
          fontSize: "48px",
          fontWeight: "500",
        },
        ".typo-s48-w400": {
          fontSize: "48px",
          fontWeight: "400",
        },
        ".typo-s40-w700": {
          fontSize: "40px",
          fontWeight: "700",
        },
        ".typo-s36-w700": {
          fontSize: "36px",
          fontWeight: "700",
        },
        ".typo-s32-w700": {
          fontSize: "32px",
          fontWeight: "700",
        },
        ".typo-s32-w400": {
          fontSize: "32px",
          fontWeight: "400",
        },
        ".typo-s26-w800": {
          fontSize: "26px",
          fontWeight: "800",
        },
        ".typo-s26-w700": {
          fontSize: "26px",
          fontWeight: "700",
        },
        ".typo-s24-w700": {
          fontSize: "24px",
          fontWeight: "700",
        },
        ".typo-s24-w600": {
          fontSize: "24px",
          fontWeight: "600",
        },
        ".typo-s24-w500": {
          fontSize: "24px",
          fontWeight: "500",
        },
        ".typo-s24-w400": {
          fontSize: "24px",
          fontWeight: "400",
        },
        ".typo-s20-w700": {
          fontSize: "20px",
          fontWeight: "700",
        },
        ".typo-s20-w600": {
          fontSize: "20px",
          fontWeight: "600",
        },
        ".typo-s20-w500": {
          fontSize: "20px",
          fontWeight: "500",
        },
        ".typo-s20-w400": {
          fontSize: "20px",
          fontWeight: "400",
        },
        ".typo-s18-w700": {
          fontSize: "18px",
          fontWeight: "700",
        },
        ".typo-s18-w600": {
          fontSize: "18px",
          fontWeight: "600",
        },
        ".typo-s18-w500": {
          fontSize: "18px",
          fontWeight: "400",
        },
        ".typo-s18-w400": {
          fontSize: "18px",
          fontWeight: "400",
        },
        ".typo-s16-w700": {
          fontSize: "16px",
          fontWeight: "700",
        },
        ".typo-s16-w600": {
          fontSize: "16px",
          fontWeight: "600",
        },
        ".typo-s16-w500": {
          fontSize: "16px",
          fontWeight: "500",
        },
        ".typo-s16-w400": {
          fontSize: "16px",
          fontWeight: "400",
        },
        ".typo-s15-w700": {
          fontSize: "15px",
          fontWeight: "700",
        },
        ".typo-s14-w700": {
          fontSize: "14px",
          fontWeight: "700",
        },
        ".typo-s14-w600": {
          fontSize: "14px",
          fontWeight: "600",
        },
        ".typo-s14-w500": {
          fontSize: "14px",
          fontWeight: "500",
        },
        ".typo-s14-w400": {
          fontSize: "14px",
          fontWeight: "400",
        },
        ".typo-s13-w600": {
          fontSize: "13px",
          fontWeight: "600",
        },
        ".typo-s13-w500": {
          fontSize: "13px",
          fontWeight: "500",
        },
        ".typo-s13-w400": {
          fontSize: "13px",
          fontWeight: "400",
        },
        ".typo-s12-w700": {
          fontSize: "12px",
          fontWeight: "700",
        },
        ".typo-s12-w600": {
          fontSize: "12px",
          fontWeight: "600",
        },
        ".typo-s12-w500": {
          fontSize: "12px",
          fontWeight: "500",
        },
        ".typo-s12-w400": {
          fontSize: "12px",
          fontWeight: "400",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
