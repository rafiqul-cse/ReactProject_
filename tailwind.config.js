/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b0c14",
          800: "#12131d",
          700: "#1d1f2b",
        },
        brand: {
          orange: "#ff7a45",
          pink: "#ff3d81",
          violet: "#8b3dff",
        },
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        brand: "linear-gradient(90deg, #ff7a45 0%, #ff3d81 55%, #8b3dff 100%)",
      },
    },
  },
  plugins: [],
};
