/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-y': 'gradient-y 15s ease infinite',
        'bounce': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};