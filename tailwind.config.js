/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4',
        placeholder: '#7A7A7A',
        error: "#D86161",
        white: "#FAFAFA",
        dark: "#212121",
        borderColor: "#E6E6E6",
        bgColor: '#FFFFFF'
        // ...
      }
    },
  },
  plugins: [],
}

