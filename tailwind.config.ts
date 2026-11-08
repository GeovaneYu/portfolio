import type { Config } from "tailwindcss";
import TailwindCssAnimate from "tailwindcss-animate";
import path from "path";

// Nota: o tema principal vive em src/index.css (@theme, Tailwind v4).
// Este arquivo só mantém compatibilidade de alias @/ e plugins.
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        border: "#111111",
        input: "#111111",
        ring: "#FF4D00",
        background: "#F4F4F0",
        foreground: "#111111",
        primary: {
          DEFAULT: "#111111",
          foreground: "#F4F4F0",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#111111",
        },
        destructive: {
          DEFAULT: "#FF4D00",
          foreground: "#111111",
        },
        muted: {
          DEFAULT: "#555552",
          foreground: "#555552",
        },
        accent: {
          DEFAULT: "#111111",
          foreground: "#F4F4F0",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#111111",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111111",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Archivo'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [TailwindCssAnimate],
} satisfies Config;
