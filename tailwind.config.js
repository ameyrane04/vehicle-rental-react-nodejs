/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brandYellow: '#fbbf24', // Example yellow shade
        brandBlack: '#000', // Black
        dark: {
          100: '#23272A',
          200: '#2C2F33',
          300: '#99AAB5',
        },
        primary: {
          100: '#5865F2', // Example primary color
        },
      },
    },
  },
  plugins: [],
}

