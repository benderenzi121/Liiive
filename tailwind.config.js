/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    colors: {  
    primary: '#8E352F',
    secondary: '#272727',
    accent : '#C26258',
    background: '#1E1E1E',
    text: '#FFFFFF'
}
    },
  },
  plugins: [],
}
