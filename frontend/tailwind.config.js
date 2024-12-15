/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: 'typing 3s steps(20,end)',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' }, // Start with no width
          to: { width: '24%' }, // Gradually reveal the text
        },
        blink: {
          '0%, 100%': { opacity: '1' }, // Cursor visible
          '50%': { opacity: '0' }, // Cursor hidden
        },
        glitch: {
          '0%': { textShadow: '2px 0 red, -2px 0 blue' },
          '20%': { textShadow: '5px 0 red, -5px 0 blue' },
          '40%': { textShadow: '-2px 0 red, 2px 0 blue' },
          '60%': { textShadow: '2px -2px red, -2px 2px blue' },
          '80%': { textShadow: '0 0 red, 0 0 blue' },
          '100%': { textShadow: '2px 0 red, -2px 0 blue' },
        },
      },
      colors: {
        blue: '#86d3f1', // Custom blue color
        pink: '#ef58a0',
        purple: '#8e2a8b',
        green: '#97bd4c',
        yellow: '#fde74e',
        gray: '#D4D2C8',
        red: '#ca1f27',
      },
      fontFamily: {
        daft: ['daft', 'sans-serif'],
        blur: ['blur', 'sans-serif'],
        banco: ['banco', 'sans-serif'],
        windows: ['windows', 'sans-serif'],
        pixel: ['pixel', 'sans-serif'],
        pixel2: ['pixel2', 'sans-serif'],
        terminal: ['terminal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};



