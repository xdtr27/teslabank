/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      padding: {
        desktop: "0 15%",
        mobile: "0 5%",
      },
      textColor: {
        primary: "#1A191E",
        alt: "#EB3850",
      },
      backgroundColor: {
        alt: "#EB3850",
      },
    },
  },
  plugins: [],
};
