/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#7C3AED",
          dark: "#8B5CF6",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          light: "#0891B2",
          dark: "#06B6D4",
        },
        accent: {
          highlight: "#F59E0B",
          success: "#10B981",
          danger: "#EF4444",
        },
        dark: {
          bg: "#0F172A",
          bgSecondary: "#111827",
          card: "#1E293B",
          text: "#F8FAFC",
          textSecondary: "#94A3B8",
          border: "#334155",
        },
        light: {
          bg: "#F8FAFC",
          bgSecondary: "#FFFFFF",
          card: "#FFFFFF",
          text: "#0F172A",
          textSecondary: "#64748B",
          border: "#CBD5E1",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
