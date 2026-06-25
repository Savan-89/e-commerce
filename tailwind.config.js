/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        cream: '#FAF8F5',
        terracotta: '#C77B5C',
        sage: '#8A9A8C',
        stone: '#6B6B6B',
        line: '#E5E0D8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
