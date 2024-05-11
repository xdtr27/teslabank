/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      padding: {
        "desktop": "0 15%"
      },
      textColor: {
        "primary": "#1A191E",
        "alt": "#EB3850"
 
      },
      backgroundColor: {
        "alt": "#EB3850"
      }
    },
  },
  plugins: [],
}

