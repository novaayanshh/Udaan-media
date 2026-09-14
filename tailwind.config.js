/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a2a58",
          dark: "#101c3f",
          light: "#24356e",
        },
        accent: {
          DEFAULT: "#e3a531",
          dark: "#c98a1a",
        },
        sky: "#2ba7e0",
        surface: {
          DEFAULT: "#ffffff",
          secondary: "#f5f7fb",
          dark: "#0e1836",
        },
        ink: {
          DEFAULT: "#1c2333",
          secondary: "#626b7d",
          inverse: "#ffffff",
          mutedInverse: "#aab2c8",
        },
        borderc: "#e6e9f2",
      },
      fontFamily: {
        heading: ["Poppins", "Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        sm: "0 6px 18px -8px rgba(16, 28, 63, 0.18)",
        card: "0 24px 48px -22px rgba(16, 28, 63, 0.28)",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "16px",
        lg: "28px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        fadeIn: "fadeIn 0.8s ease both",
        fadeInUp: "fadeInUp 0.8s ease both",
        fadeInLeft: "fadeInLeft 0.8s ease both",
        fadeInRight: "fadeInRight 0.8s ease both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
