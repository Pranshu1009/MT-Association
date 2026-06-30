/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        navy: {
          950: "#0a1628",
          900: "#0f2744",
          800: "#163a5f",
          700: "#1e4d7b",
        },
        gold: {
          500: "#c9a227",
          400: "#d4b545",
          300: "#e4cc6a",
        },
      },
      animation: {
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "float-glow": "floatGlow 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        floatGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
}
