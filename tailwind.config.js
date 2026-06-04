/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#050508',
          alt: '#0a0a0f',
        },
        text: {
          main: '#ffffff',
          muted: '#888899',
        },
        accent: {
          DEFAULT: '#6b4cff',
          secondary: '#00d2ff',
          glow: 'rgba(107, 76, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
